import React, { useState } from 'react';
import { Button, TextField, Paper, InputLabel, Box, CircularProgress, Grid, Typography } from '@material-ui/core';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import useStyles from './useStyles';
import { CustomSelect } from './CustomSelect';

interface EditProfileFormProps {
  handleSubmit: (
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
      setStatus,
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
  ) => void;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({ handleSubmit }) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const getRange = (from: number, to: number) => {
    const arr = [];
    for (let i = from; i >= to; i--) {
      arr.push(i);
    }
    return arr;
  };
  const years = getRange(new Date().getUTCFullYear() - 5, 1980);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const days = getRange(30, 1);
  const genderSelection = ['Male', 'Female'];

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        gender: '',
        month: '',
        day: '',
        year: '',
        email: '',
        phone: '',
        address: '',
        description: '',
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required('First name is required').max(15, 'First name is too long'),
        lastName: Yup.string().required('Last name is required').max(15, 'Last name is too long'),
        gender: Yup.string().required('Gender is required'),
        month: Yup.string().required('Birth month is required'),
        day: Yup.string().required('Birth day is required'),
        year: Yup.string().required('Birth year is required'),
        email: Yup.string().required('Email is required').email('Email is not valid'),
        phone: Yup.string()
          .required('Phone number is required')
          .matches(
            /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
            'Phone number is not valid',
          ),
        address: Yup.string().required('Address is required'),
        description: Yup.string().required('description is required'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          {show && (
            <Box className={classes.modal} component={Paper}>
              <Box className={classes.modalContent}>
                <Typography className={classes.close} onClick={() => setShow(false)}>
                  x
                </Typography>
                <Typography style={{ marginBottom: '10px' }} component="h1" variant="h5">
                  Enter your Phone number
                </Typography>
                <TextField
                  id="phone"
                  variant="outlined"
                  fullWidth
                  InputProps={{ classes: { input: classes.inputs } }}
                  name="phone"
                  autoComplete="phone"
                  autoFocus
                  helperText={touched.phone ? errors.phone : ''}
                  error={touched.phone && Boolean(errors.phone)}
                  value={values.phone}
                  onChange={handleChange}
                  placeholder="6470001234"
                />
              </Box>
            </Box>
          )}

          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={3}>
              <InputLabel className={classes.label}>FIRST NAME</InputLabel>
            </Grid>
            <Grid item xs={9}>
              <TextField
                id="firstName"
                variant="outlined"
                fullWidth
                InputProps={{
                  classes: { input: classes.inputs },
                }}
                name="firstName"
                autoComplete="firstName"
                autoFocus
                helperText={touched.firstName ? errors.firstName : ''}
                error={touched.firstName && Boolean(errors.firstName)}
                value={values.firstName}
                onChange={handleChange}
                placeholder="John"
              />
            </Grid>
            <Grid item xs={3}>
              <InputLabel className={classes.label}>LAST NAME</InputLabel>
            </Grid>
            <Grid item xs={9}>
              <TextField
                id="lastName"
                variant="outlined"
                fullWidth
                InputProps={{
                  classes: { input: classes.inputs },
                }}
                name="lastName"
                autoComplete="lastName"
                autoFocus
                helperText={touched.lastName ? errors.lastName : ''}
                error={touched.lastName && Boolean(errors.lastName)}
                value={values.lastName}
                onChange={handleChange}
                placeholder="Doe"
              />
            </Grid>

            <Grid item xs={3}>
              <InputLabel className={classes.label}>Gender</InputLabel>
            </Grid>
            <Grid item xs={9}>
              <CustomSelect
                id={'gender'}
                cname={classes.selectHalf}
                value={values.gender}
                arr={genderSelection}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={3}>
              <InputLabel className={classes.label}>BIRTH DATE</InputLabel>
            </Grid>
            <Grid item xs={3}>
              <CustomSelect
                id={'month'}
                cname={classes.select}
                value={values.month}
                arr={months}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={3}>
              <CustomSelect
                id={'day'}
                cname={classes.select}
                value={values.day}
                arr={days}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={3}>
              <CustomSelect
                id={'year'}
                cname={classes.select}
                value={values.year}
                arr={years}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={3}>
              <InputLabel className={classes.label}>EMAIL ADDRESS</InputLabel>
            </Grid>
            <Grid item xs={9}>
              <TextField
                id="email"
                variant="outlined"
                fullWidth
                InputProps={{
                  classes: { input: classes.inputs },
                }}
                name="email"
                autoComplete="email"
                helperText={touched.email ? errors.email : ''}
                error={touched.email && Boolean(errors.email)}
                value={values.email}
                onChange={handleChange}
                placeholder="john-doe@gmail.com"
              />
            </Grid>
            <Grid item xs={3}>
              <InputLabel className={classes.label}>PHONE NUMBER</InputLabel>
            </Grid>
            <Grid item xs={5}>
              <Typography style={{ lineHeight: '3rem' }}>
                {values.phone === '' ? 'No Phone number entered' : values.phone}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button
                style={{ border: '1px solid red', color: 'red', width: '100%', lineHeight: '2rem' }}
                onClick={() => {
                  setShow(true);
                }}
              >
                Add a phone number
              </Button>
            </Grid>
            <Grid item xs={3}>
              <InputLabel className={classes.label}>WHERE YOU LIVE</InputLabel>
            </Grid>
            <Grid item xs={9}>
              <TextField
                id="address"
                variant="outlined"
                fullWidth
                InputProps={{
                  classes: { input: classes.inputs },
                }}
                name="address"
                autoComplete="address"
                autoFocus
                helperText={touched.address ? errors.address : ''}
                error={touched.address && Boolean(errors.address)}
                value={values.address}
                onChange={handleChange}
                placeholder="Address"
              />
            </Grid>
            <Grid item xs={3}>
              <InputLabel className={classes.label}>DESCRIBE YOURSELF</InputLabel>
            </Grid>
            <Grid item xs={9}>
              <TextField
                id="description"
                variant="outlined"
                fullWidth
                InputProps={{
                  classes: { input: classes.inputs },
                }}
                name="description"
                autoComplete="description"
                autoFocus
                helperText={touched.description ? errors.description : ''}
                error={touched.description && Boolean(errors.description)}
                value={values.description}
                onChange={handleChange}
                placeholder="About you"
              />
            </Grid>
          </Grid>

          <Box textAlign="center">
            <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Save'}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default EditProfileForm;
