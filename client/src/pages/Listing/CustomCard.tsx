import React from 'react';
import { Card, CardActionArea, CardMedia, Typography, CardContent, Box } from '@material-ui/core';
import useStyles from './useStyles';
import { LocationOn } from '@material-ui/icons';

interface CustomCardProps {
  fullName: string;
  description: string;
  intro: string;
  address: string;
  price: string;
}

export const CustomCard: React.FC<CustomCardProps> = ({ ...props }) => {
  const { fullName, description, intro, address, price } = props;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardButton}>
        <CardMedia
          className={classes.avatar}
          component="img"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="placeholder avatar"
        />
        <CardContent>
          <Typography className={classes.fullName}>{fullName}</Typography>
          <Typography className={classes.intro}>{intro}</Typography>
          <CardMedia
            className={classes.rating}
            component="img"
            image="https://media.istockphoto.com/vectors/five-yellow-stars-customer-product-rating-icon-fow-web-applications-vector-id1140391316?k=20&m=1140391316&s=612x612&w=0&h=Lm9zyp21cUh0MpW3YAfh5eBRXzmcnhMluSEUcMF2e-Q="
            alt="placeholder review rating"
          />
          <Typography className={classes.desc}>{description}</Typography>
          <Box className={classes.bottomContent}>
            <LocationOn
              style={{
                color: 'red',
              }}
            />
            <Typography component="span" className={classes.address}>
              {address}
            </Typography>
            <Typography
              component="span"
              style={{
                fontWeight: 900,
              }}
            >
              {price}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
