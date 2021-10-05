import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './useStyles';

import { getProfileById } from '../../helpers/APICalls/profile';
import MainProfileDetails from '../../components/ProfileDetails/MainProfileDetails';
import ProfileBookingCard from '../../components/ProfileDetails/ProfileBookingCard';

import { Profile } from '../../interface/Profile';

export default function ProfileDetails(): JSX.Element {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [profile, setProfile] = useState<Profile | undefined>();

  useEffect(() => {
    getProfileById(id).then((res) => {
      if (res.success) {
        setProfile(res.success);
      } else {
        history.push('/404');
      }
    });
  }, [id, history]);

  const loadingOrRender = () => {
    if (profile) {
      return (
        <>
          <Grid item xs={12} sm={6} className={classes.mainContent}>
            {<MainProfileDetails profile={profile} />}
          </Grid>
          <Grid item xs={12} sm={3}>
            {<ProfileBookingCard profile={profile} />}
          </Grid>
        </>
      );
    } else
      return (
        <Grid item xs={12} sm={3}>
          <CircularProgress />
        </Grid>
      );
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} style={{ marginBottom: '3em' }}>
        Header place holder
      </Grid>

      {loadingOrRender()}
    </Grid>
  );
}
