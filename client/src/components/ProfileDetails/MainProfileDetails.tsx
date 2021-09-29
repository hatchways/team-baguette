import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
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
  const { firstName, lastName, description, address, gallery, user } = profile;

  const renderGalleryCards = () => {
    return gallery.map((item, index) => {
      return (
        <Grid item xs={2} key={`gallery-image-${index}`}>
          <CardActionArea
            className={classes.card}
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
      <Card className={classes.root} elevation={20}>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" position="relative">
          <CardMedia
            component="img"
            image="https://tg-cdn.azureedge.net/sites/default/files/images/paragraph/italrb/easy_guide_grass.jpg"
            alt="profile banner image"
            className={classes.banner}
          />
          <AvatarDisplay user={user} className={classes.avatar} />
          <CardContent className={classes.profileName}>
            <Typography variant="h3" className={classes.header}>
              {`${firstName} ${lastName}`}
            </Typography>
            <Typography className={classes.subheader}>Loving pet sitter</Typography>
            <Typography variant="subtitle2" className={classes.location}>
              <RoomRoundedIcon color="error" fontSize="small" /> {address}
            </Typography>
          </CardContent>
        </Box>
        <Box className={classes.cardBody}>
          <CardContent>
            <Typography variant="h4" component="div" gutterBottom className={classes.header}>
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
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          className={classes.modal}
        >
          <IconButton className={classes.icon} onClick={() => setActive(false)}>
            <CloseIcon fontSize="large" />
          </IconButton>
          <img src={gallery[activeIndex]} className={classes.modalImage} />
        </Box>
      </Modal>
    </Box>
  );
}
