import { Box, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { CustomCard } from './CustomCard';
import { dummyData } from './DummyData';
import useStyles from './useStyles';

export const Listing: React.FC = () => {
  const classes = useStyles();
  return (
    <Box width="100%" maxWidth={800} p={6} margin="auto" marginTop="100px">
      <Typography className={classes.header} component="h1" variant="h5">
        Your Search Results
      </Typography>
      <Box className={classes.search}>
        <TextField
          id="address"
          variant="outlined"
          InputProps={{
            classes: { input: classes.inputs },
          }}
          name="address"
          autoComplete="address"
          autoFocus
          value={'Toronto, Ontario'}
          placeholder="Address"
        />
      </Box>
      <Grid container spacing={6}>
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
    </Box>
  );
};
