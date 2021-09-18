import React from 'react';
import { Paper, Box, Typography } from '@material-ui/core';
import { FormikHelpers } from 'formik';
import useStyles from './useStyles';
import EditProfileForm from './EditProfileForm/EditProfileForm';
import { useSnackBar } from '../../context/useSnackbarContext';

export const EditProfile: React.FC = () => {
  const classes = useStyles();
  const { updateSnackBarMessage } = useSnackBar();
  const handleSubmit = (
    {
      firstName,
      lastName,
      gender,
      month,
      day,
      year,
      email,
      phone,
      address,
      description,
    }: {
      firstName: string;
      lastName: string;
      gender: string;
      month: string;
      day: string;
      year: string;
      email: string;
      phone: string;
      address: string;
      description: string;
    },
    {
      setSubmitting,
    }: FormikHelpers<{
      firstName: string;
      lastName: string;
      gender: string;
      month: string;
      day: string;
      year: string;
      email: string;
      phone: string;
      address: string;
      description: string;
    }>,
  ) => {
    const birthDate = `${month} ${day} ${year}`;
  };
  return (
    <Box width="100%" maxWidth={700} p={6} component={Paper} margin="auto" marginTop="100px">
      <Typography className={classes.welcome} component="h1" variant="h5">
        Edit Profile
      </Typography>
      <EditProfileForm handleSubmit={handleSubmit} />
    </Box>
  );
};
