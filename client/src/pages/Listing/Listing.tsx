import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { CustomCard } from './CustomCard';
import DateFnsUtils from '@date-io/date-fns';
import { searchProfiles } from '../../helpers/APICalls/profile';
import { ProfileListing } from '../../interface/Profile';
import { useSnackBar } from '../../context/useSnackbarContext';
import useStyles from './useStyles';
import useDebounce from './useDebounce';

export const Listing: React.FC = () => {
  const classes = useStyles();
  const [dateFrom, setDateFrom] = useState<Date | null>(new Date());
  const [dateTo, setDateTo] = useState<Date | null>(new Date());
  const [profiles, setProfiles] = useState<Array<ProfileListing>>([]);
  const [debounce, setDebounce] = useState('');
  const { updateSnackBarMessage } = useSnackBar();
  const debouncedValue = useDebounce(debounce, 500);

  const queryProfiles = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setDebounce(e.target.value);
  };

  useEffect(() => {
    searchProfiles(debouncedValue, dateFrom, dateTo).then((res) => {
      if (res.success) {
        setProfiles(res.success);
      } else {
        updateSnackBarMessage('Failed to get sitter profiles');
      }
    });
  }, [debouncedValue, dateFrom, dateTo, updateSnackBarMessage]);
  return (
    <Box width="100%" maxWidth={800} p={3} margin="auto">
      <Typography className={classes.header} component="h1" variant="h5">
        Your Search Results
      </Typography>
      <Box display="flex" justifyContent="center" marginTop="1rem" marginBottom="4rem">
        <Box position="relative" border="1px solid lightgray" display="flex" justifyContent="center">
          <Search className={classes.inputIcon} color="secondary" />

          <TextField
            id="address"
            InputProps={{ disableUnderline: true, classes: { input: classes.inputs } }}
            name="address"
            autoComplete="address"
            autoFocus
            placeholder="Address"
            onChange={(e) => queryProfiles(e)}
          />
        </Box>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            className={classes.inputBox}
            clearable
            value={dateFrom}
            placeholder="09/22/2021"
            onChange={(date) => setDateFrom(date)}
            minDate={new Date()}
            format="MM/dd/yyyy"
            InputAdornmentProps={{ position: 'start' }}
            InputProps={{
              disableUnderline: true,
              classes: { input: classes.dateInput },
            }}
          />
          <KeyboardDatePicker
            className={classes.inputBox}
            clearable
            value={dateTo}
            placeholder="09/22/2021"
            onChange={(date) => setDateTo(date)}
            minDate={new Date()}
            format="MM/dd/yyyy"
            InputAdornmentProps={{ position: 'start' }}
            InputProps={{
              disableUnderline: true,
              classes: { input: classes.dateInput },
            }}
          />
        </MuiPickersUtilsProvider>
      </Box>
      <Grid container spacing={4}>
        {profiles.map((profile) => (
          <Grid item xs={4} key={profile.user._id}>
            <CustomCard
              fullName={`${profile.firstName} ${profile.lastName}`}
              intro={'Loving pet sitter'}
              description={profile.description}
              address={profile.address}
              price={'$15/hr'}
              avatar={profile.user.avatar}
              profileId={profile._id}
            />
          </Grid>
        ))}
      </Grid>
      <Button color="inherit" variant="contained" className={classes.button}>
        Show More
      </Button>
    </Box>
  );
};
