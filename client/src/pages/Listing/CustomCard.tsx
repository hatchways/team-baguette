import React from 'react';
import { Card, CardActionArea, CardMedia, Typography, CardContent, Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import useStyles from './useStyles';
import { LocationOn } from '@material-ui/icons';

interface CustomCardProps {
  fullName: string;
  description: string;
  intro: string;
  address: string;
  price: string;
  avatar: string;
}

export const CustomCard: React.FC<CustomCardProps> = ({ ...props }) => {
  const { fullName, description, intro, address, price, avatar } = props;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardButton}>
        <CardMedia className={classes.avatar} component="img" image={avatar} alt="placeholder avatar" />
        <CardContent>
          <Typography className={classes.fullName}>{fullName}</Typography>
          <Typography className={classes.intro}>{intro}</Typography>
          <Box display="flex" justifyContent="center" marginTop="4px">
            <Rating size="small" name="read-only" value={5} readOnly />
          </Box>
          <Typography className={classes.desc}>{description}</Typography>
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            position="absolute"
            width="100%"
            height="5vh"
            bottom={0}
            left={0}
            borderTop="1px solid lightgray"
          >
            <LocationOn color="secondary" />
            <Typography component="span" className={classes.address}>
              {address}
            </Typography>
            <Typography component="span" className={classes.price}>
              {price}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
