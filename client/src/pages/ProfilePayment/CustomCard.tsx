import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { PaymentCard } from '../../interface/Payment';
import visa from '../../Images/visa-logo.svg';
import masterCard from '../../Images/mastercard-logo.svg';
import useStyles from './useStyles';

interface CustomCardProps {
  card: PaymentCard;
}

export const CustomCard: React.FC<CustomCardProps> = ({ card }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardLogo}
        component="img"
        image={card.type === 'visa' ? visa : masterCard}
        alt="logo"
      />
      <CardContent>
        <Typography className={classes.number}>**** &nbsp; **** &nbsp; **** &nbsp; {card.last4}</Typography>
        <Typography className={classes.exp}>Exp. Date {card.exp}</Typography>
        <Typography className={classes.name}>{card.fullName}</Typography>
      </CardContent>
    </Card>
  );
};
