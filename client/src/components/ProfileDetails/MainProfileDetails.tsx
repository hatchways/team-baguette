import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Avatar,
  Grid,
  Modal,
  IconButton,
} from '@material-ui/core';
import useStyles from './useStyles';
import { Profile } from '../../interface/Profile';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import CloseIcon from '@material-ui/icons/Close';

import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';

interface Props {
  profile: Profile;
}

export default function MainProfileDetails({ profile }: Props): JSX.Element {
  const classes = useStyles();
  const [active, setActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { firstName, lastName, description, address } = profile;
  const gallery = [
    'https://team-baguette-loving-sitter.s3.amazonaws.com/6141d6b0fd48a965b0fc299d/gallery-jewelry_3.png',
    'https://team-baguette-loving-sitter.s3.amazonaws.com/6141d6b0fd48a965b0fc299d/gallery-engagement.jpg',
    'https://team-baguette-loving-sitter.s3.amazonaws.com/6141d6b0fd48a965b0fc299d/gallery-enlightenment.jpg',
    'https://team-baguette-loving-sitter.s3.amazonaws.com/6141d6b0fd48a965b0fc299d/gallery-enrichment.jpg',
    'https://team-baguette-loving-sitter.s3.amazonaws.com/6141d6b0fd48a965b0fc299d/gallery-mission.jpg',
  ];

  const renderGalleryCards = () => {
    return gallery.map((item, index) => {
      return (
        <Grid item xs={2} key={`gallery-image-${index}`}>
          <CardActionArea
            style={{ height: '100%' }}
            onClick={() => {
              setActive(true);
              setActiveIndex(index);
            }}
          >
            <CardMedia component="img" image={item} />
          </CardActionArea>
        </Grid>
      );
    });
  };
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Card className={classes.card} elevation={20}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          style={{ position: 'relative' }}
        >
          <CardMedia
            component="img"
            image="https://tg-cdn.azureedge.net/sites/default/files/images/paragraph/italrb/easy_guide_grass.jpg"
            alt="backgroundwhatever"
            className={classes.banner}
          />
          <Avatar
            alt="Profile Image"
            src={` https://avatars.dicebear.com/api/big-ears-neutral/${firstName}.svg`}
            className={classes.avatar}
          />
          <CardContent className={classes.profileName}>
            <Typography variant="h3" className={classes.header}>
              {`${firstName} ${lastName}`}
            </Typography>
            <Typography className={classes.subheader}>Loving pet sitter</Typography>
            <Typography variant="subtitle2" className={classes.subheader}>
              <RoomRoundedIcon color="error" /> {address}
            </Typography>
          </CardContent>
        </Box>
        <Box>
          <CardContent>
            <Typography variant="h4" component="div" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1">{description}</Typography>
          </CardContent>

          <CardContent>
            <Grid container spacing={2} alignItems="stretch">
              {renderGalleryCards()}
            </Grid>
          </CardContent>
        </Box>
      </Card>

      <Modal open={active} onClose={() => setActive(false)}>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start">
          <IconButton onClick={() => setActive(false)}>
            <CloseIcon style={{ color: 'white' }} fontSize="large" />
          </IconButton>
          <img src={gallery[activeIndex]} className={classes.icon} />
        </Box>
      </Modal>
    </Box>
  );
}
