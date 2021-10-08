import React, { useState } from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { CardCvcElement, CardNumberElement, CardExpiryElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useStyles from './useStyles';
import { PaymentCard } from '../../interface/PaymentCard';

interface CardInputProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setCard: React.Dispatch<React.SetStateAction<PaymentCard | undefined>>;
}
export const CardInput: React.FC<CardInputProps> = ({ setShow, setCard }) => {
  const classes = useStyles();
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setProcessing] = useState(false);
  const options = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardNumberElement);
    if (cardElement) {
      const payload = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
      if (payload) {
        setShow(false);
        setCard({ number: 4242, name: 'Payload Data', type: 'not visa', exp: 'returned from payload' });
      }
    }
  };
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Typography className={classes.inputLabels}>Card Number</Typography>
        <CardNumberElement options={options} className={classes.inputs} />
        <Typography className={classes.inputLabels}>Expiration Date</Typography>
        <CardExpiryElement options={options} className={classes.inputs} />
        <Typography className={classes.inputLabels}>CVC</Typography>
        <CardCvcElement options={options} className={classes.inputs} />
        <Box textAlign="center">
          <Button type="submit" variant="outlined" className={classes.button} disabled={isProcessing}>
            {isProcessing ? 'Processing...' : 'Save'}
          </Button>
        </Box>
      </form>
    </Box>
  );
};
