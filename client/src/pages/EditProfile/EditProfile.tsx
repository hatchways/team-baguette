import React, { useEffect, useState } from 'react';
import { Paper, Box, Typography } from '@material-ui/core';
import { FormikHelpers } from 'formik';
import useStyles from './useStyles';
import EditProfileForm from './EditProfileForm/EditProfileForm';
import { createProfile, updateProfile, getProfileById } from '../../helpers/APICalls/profile';
import { useSnackBar } from '../../context/useSnackbarContext';
import { useAuth } from '../../context/useAuthContext';
import { InitValue } from '../../interface/Profile';

export const EditProfile: React.FC = () => {
  const classes = useStyles();
  const { updateSnackBarMessage } = useSnackBar();
  const { loggedInUser } = useAuth();
  const [initValue, setInitValue] = useState<InitValue>({
    firstName: '',
    lastName: '',
    gender: '',
    month: '',
    day: '',
    year: '',
    email: '',
    phone: 0,
    address: '',
    description: '',
  });
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
      phone: number;
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
      phone: number;
      address: string;
      description: string;
    }>,
  ) => {
    const birthDate = `${month} ${day} ${year}`;
    //Checks the initial values to see if it is empty.
    //If empty, that means profile does not exists and handleSubmit should create. Otherwise update.
    if (Object.values(initValue).every((prop) => prop === null || prop === '' || prop === 0)) {
      createProfile(firstName, lastName, gender, birthDate, email, phone, address, description).then((data) => {
        if (data.error) {
          setSubmitting(false);
          updateSnackBarMessage('Failed to create a profile');
        } else if (data.success) {
          updateSnackBarMessage('Profile Created!');
        }
      });
    } else {
      updateProfile(firstName, lastName, gender, birthDate, email, phone, address, description).then((data) => {
        if (data.error) {
          setSubmitting(false);
          updateSnackBarMessage('Failed to update the profile');
        } else if (data.success) {
          updateSnackBarMessage('Profile Updated!');
        }
      });
    }
  };
  useEffect(() => {
    if (loggedInUser && loggedInUser.id) {
      getProfileById(loggedInUser.id).then((res) => {
        if (res.success) {
          const { firstName, lastName, gender, email, phone, address, description, birthDate } = res.success;
          const bDate = new Date(birthDate);
          const year = bDate.getFullYear().toString();
          const month = (bDate.getMonth() + 1).toString();
          const day = bDate.getDate().toString();
          const initVal = {
            firstName,
            lastName,
            gender,
            email,
            phone,
            address,
            description,
            day,
            month,
            year,
          };
          setInitValue(initVal);
        } else {
          updateSnackBarMessage('No profile exists!');
        }
      });
    }
  }, [loggedInUser, updateSnackBarMessage]);
  return (
    <Box width="100%" maxWidth={700} p={6} component={Paper} margin="auto" marginTop="100px">
      <Typography className={classes.welcome} component="h1" variant="h5">
        Edit Profile
      </Typography>
      <EditProfileForm handleSubmit={handleSubmit} initValue={initValue} />
    </Box>
  );
};
