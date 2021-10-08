import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './useStyles';

import { getProfileById } from '../../helpers/APICalls/profile';
import MainProfileDetails from '../../components/ProfileDetails/MainProfileDetails';
import ProfileBookingCard from '../../components/ProfileDetails/ProfileBookingCard';

import { Profile } from '../../interface/Profile';
import { useSnackBar } from '../../context/useSnackbarContext';

export default function ProfileDetails(): JSX.Element {
  const classes = useStyles();
  const history = useHistory();
  const { updateSnackBarMessage } = useSnackBar();
  const { id } = useParams<{ id: string }>();
  const [profile, setProfile] = useState<Profile | undefined>();

  useEffect(() => {
    getProfileById(id).then((res) => {
      if (res.success) {
        setProfile(res.success);
      } else if (res.error && res.error.message) {
        updateSnackBarMessage(res.error.message);
        history.push('/dashboard');
      } else {
        history.push('/404');
      }
    });
  }, [id, history, updateSnackBarMessage]);

  if (!profile) {
    return (
      <Grid item xs={12} sm={3}>
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={6} className={classes.mainContent}>
        {<MainProfileDetails profile={profile} />}
      </Grid>
      <Grid item xs={12} sm={3}>
        {<ProfileBookingCard profile={profile} />}
      </Grid>
    </Grid>
  );
}
