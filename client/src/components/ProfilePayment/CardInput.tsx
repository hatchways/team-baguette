import React, { useState } from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { CardCvcElement, CardNumberElement, CardExpiryElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useStyles from './useStyles';
import { PaymentCard } from '../../interface/Payment';
import { useAuth } from '../../context/useAuthContext';
import { getProfileById } from '../../helpers/APICalls/profile';
import { savePaymentMethod } from '../../helpers/APICalls/payment';

interface CardInputProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setCard: React.Dispatch<React.SetStateAction<PaymentCard | undefined>>;
}
export const CardInput: React.FC<CardInputProps> = ({ setShow, setCard }) => {
  const classes = useStyles();
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setProcessing] = useState(false);
  const { loggedInUser } = useAuth();
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
    let billingDetails;
    if (loggedInUser && loggedInUser.id) {
      await getProfileById(loggedInUser.id).then((res) => {
        if (res.success) {
          const { firstName, lastName, address, email } = res.success;
          const details = {
            name: `${firstName} ${lastName}`,
            email: email,
            address: {
              city: address,
            },
          };
          billingDetails = details;
        }
      });
    }
    const cardElement = elements.getElement(CardNumberElement);
    if (cardElement) {
      const payload = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: billingDetails,
      });
      console.log(payload);
      if (payload && payload.paymentMethod) {
        const { card, billing_details } = payload.paymentMethod;
        setShow(false);
        let month = card?.exp_month.toString();
        if (month && month.length === 1) {
          month = '0' + month;
        }
        const year = card?.exp_year.toString().slice(-2);
        await savePaymentMethod({
          last4: card?.last4,
          fullName: billing_details.name,
          type: card?.brand,
          exp: `${month}/${year}`,
        }).then((res) => {
          if (res.success) {
            setCard(res.success);
          }
        });
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
