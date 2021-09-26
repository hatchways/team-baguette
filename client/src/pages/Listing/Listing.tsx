import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { CustomCard } from './CustomCard';
import useStyles from './useStyles';
import { Search } from '@material-ui/icons';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { getProfiles } from '../../helpers/APICalls/profile';
import { ProfileListing } from '../../interface/Profile';

export const Listing: React.FC = () => {
  const classes = useStyles();
  const [dateFrom, setDateFrom] = useState<Date | null>(new Date());
  const [dateTo, setDateTo] = useState<Date | null>(new Date());
  const [profiles, setProfiles] = useState<Array<ProfileListing>>([]);
  useEffect(() => {
    getProfiles().then((res) => {
      if (res.success) {
        setProfiles(res.success);
      }
    });
  }, []);
  return (
    <Box width="100%" maxWidth={800} p={3} margin="auto">
      <Typography className={classes.header} component="h1" variant="h5">
        Your Search Results
      </Typography>
      <Box display="flex" justifyContent="center" marginTop="1rem" marginBottom="4rem">
        <Box className={classes.inputBox}>
          <Search className={classes.inputIcon} style={{ color: 'red' }} />
          <TextField
            id="address"
            InputProps={{ disableUnderline: true, classes: { input: classes.inputs } }}
            name="address"
            autoComplete="address"
            autoFocus
            value={'Toronto, Ontario'}
            placeholder="Address"
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
