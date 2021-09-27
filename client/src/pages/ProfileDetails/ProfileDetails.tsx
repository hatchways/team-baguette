import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Paper, Box, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import useStyles from './useStyles';

import { getProfileById } from '../../helpers/APICalls/profile';
import MainProfileDetails from '../../components/ProfileDetails/MainProfileDetails';
import { Profile } from '../../interface/Profile';

export default function ProfileDetails(): JSX.Element {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const [profile, setProfile] = useState<Profile | undefined>();

  useEffect(() => {
    getProfileById(id).then((res) => {
      console.log(res);
      if (res.success) {
        setProfile(res.success);
      }
    });
  }, [id]);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />

      <Grid item xs={12} sm={6} className={classes.mainContent}>
        {profile && <MainProfileDetails profile={profile} />}
      </Grid>
      <Grid item xs={12} sm={3} style={{ backgroundColor: 'yellow' }}>
        This should be the little price card
      </Grid>
    </Grid>
  );
}
