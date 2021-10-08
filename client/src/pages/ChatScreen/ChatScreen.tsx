import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

import SideChatBar from '../../components/SideChatBar/SideChatBar';

import useStyles from './useStyles';

// TODO fill out with appropriate imports and actually submit it
// import { getProfileById } from '../../helpers/APICalls/profile';
// import MainProfileDetails from '../../components/ProfileDetails/MainProfileDetails';
// import ProfileBookingCard from '../../components/ProfileDetails/ProfileBookingCard';

// import { Profile } from '../../interface/Profile';

export default function ProfileDetails(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={5} md={3} className={classes.mainContent}>
        <SideChatBar />
      </Grid>
      <Grid item xs={12} sm={6} md={8} style={{ backgroundColor: 'green' }}>
        Massive chat screen
      </Grid>
    </Grid>
  );
}
