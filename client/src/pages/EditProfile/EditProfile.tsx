import React from 'react';
import { Paper, Box, Typography } from '@material-ui/core';
import { FormikHelpers } from 'formik';
import useStyles from './useStyles';
import EditProfileForm from './EditProfileForm/EditProfileForm';
import { createProfile, updateProfile } from '../../helpers/APICalls/profile';
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
    createProfile(firstName, lastName, gender, birthDate, email, phone, address, description).then(async (data) => {
      if (data.error) {
        const response = await updateProfile(
          firstName,
          lastName,
          gender,
          birthDate,
          email,
          phone,
          address,
          description,
        );
        if (response.error) {
          setSubmitting(false);
          updateSnackBarMessage('Profile Update failed');
        } else if (response.success) {
          updateSnackBarMessage('Profile Updated!');
        }
      } else if (data.success) {
        updateSnackBarMessage('Profile Created!');
      } else {
        console.error({ data });
        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
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
