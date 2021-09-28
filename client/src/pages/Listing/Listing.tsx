import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { CustomCard } from './CustomCard';
import { dummyData } from './DummyData';
import useStyles from './useStyles';
import { Search } from '@material-ui/icons';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

export const Listing: React.FC = () => {
  const classes = useStyles();
  const [dateFrom, setDateFrom] = useState<Date | null>(new Date());
  const [dateTo, setDateTo] = useState<Date | null>(new Date());
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
        {dummyData.map((data) => (
          <Grid item xs={4} key={data.id}>
            <CustomCard
              fullName={data.fullName}
              intro={data.intro}
              description={data.description}
              address={data.address}
              price={data.price}
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
