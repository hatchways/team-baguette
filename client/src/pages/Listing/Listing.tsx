import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { CustomCard } from './CustomCard';
import { dummyData } from './DummyData';
import useStyles from './useStyles';
import { Search, DateRange } from '@material-ui/icons';

export const Listing: React.FC = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState('16~17 Sep 2021');
  return (
    <Box width="100%" maxWidth={800} p={3} margin="auto">
      <Typography className={classes.header} component="h1" variant="h5">
        Your Search Results
      </Typography>
      <Box className={classes.search}>
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
        <Box className={classes.inputBox}>
          <DateRange className={classes.inputIcon} style={{ color: 'gray' }} />
          <Typography className={classes.reset} onClick={() => setSelectedDate('')}>
            x
          </Typography>
          <TextField
            id="date"
            InputProps={{ disableUnderline: true, classes: { input: classes.inputs } }}
            name="date"
            autoComplete="date"
            autoFocus
            value={selectedDate}
            placeholder="Select the date range"
          />
        </Box>
      </Box>
      <Grid container spacing={4}>
        {dummyData.map((data) => (
          <Grid item xs={4} key={data.fullName}>
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
