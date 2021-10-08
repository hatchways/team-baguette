import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Box, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './useStyles';
import { CustomCard } from './CustomCard';
import { CardInput } from './CardInput';
import { PaymentCard } from '../../interface/Payment';
import { getPaymentMethodById } from '../../helpers/APICalls/payment';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';

const stripePromise = loadStripe(`${process.env.REACT_APP_PUBLISHABLE_KEY}`);

export const ProfilePayment: React.FC = () => {
  const classes = useStyles();
  const [card, setCard] = useState<PaymentCard>();
  const [show, setShow] = useState(false);
  const { loggedInUser } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  useEffect(() => {
    if (loggedInUser && loggedInUser.id) {
      getPaymentMethodById(loggedInUser.id).then((res) => {
        if (res.success) {
          setCard(res.success);
        } else {
          updateSnackBarMessage('No saved payment method');
        }
      });
    }
  }, [setCard, updateSnackBarMessage, loggedInUser]);
  return (
    <Box width="100%" maxWidth={700} p={6} component={Paper} margin="auto" marginTop="100px">
      <Typography className={classes.welcome} component="h1" variant="h5">
        Payment Methods
      </Typography>
      <Typography className={classes.profileLabel}>Saved Payment Profiles: </Typography>
      {card && <CustomCard card={card} />}
      {show && (
        <Box className={classes.modal} component={Paper}>
          <Box className={classes.modalContent}>
            <Elements stripe={stripePromise}>
              <CardInput setShow={setShow} setCard={setCard} />
            </Elements>
          </Box>
        </Box>
      )}
      <Button size="large" variant="outlined" className={classes.button} onClick={() => setShow(true)}>
        Add new payment profile
      </Button>
    </Box>
  );
};
