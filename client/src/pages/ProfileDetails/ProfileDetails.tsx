import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import useStyles from './useStyles';

import { getProfileById } from '../../helpers/APICalls/profile';
import MainProfileDetails from '../../components/ProfileDetails/MainProfileDetails';
import ProfileBookingCard from '../../components/ProfileDetails/ProfileBookingCard';

import { Profile } from '../../interface/Profile';

export default function ProfileDetails(): JSX.Element {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const [profile, setProfile] = useState<Profile | undefined>();

  useEffect(() => {
    getProfileById(id).then((res) => {
      if (res.success) {
        setProfile(res.success);
      }
    });
  }, [id]);

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} style={{ marginBottom: '3em' }}>
        Header place holder
      </Grid>

      <Grid item xs={12} sm={6} className={classes.mainContent}>
        {profile && <MainProfileDetails profile={profile} />}
      </Grid>
      <Grid item xs={12} sm={3}>
        {profile && <ProfileBookingCard profile={profile} />}
      </Grid>
    </Grid>
  );
}
