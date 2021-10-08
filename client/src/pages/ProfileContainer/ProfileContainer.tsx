import useStyles from './useStyles';
import Grid from '@material-ui/core/Grid';
import NavBarProfile from '../../components/NavBarProfile/NavBarProfile';
import EditProfilePicture from '../../components/EditProfilePicture/EditProfilePicture';
import CircularProgress from '@material-ui/core/CircularProgress';

import { EditProfile } from '../EditProfile/EditProfile';
import { useAuth } from '../../context/useAuthContext';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { ProfilePayment } from '../../components/ProfilePayment/ProfilePayment';

const ProfileContainer = (): JSX.Element => {
  const classes = useStyles();
  const { path } = useRouteMatch();
  const { loggedInUser } = useAuth();

  if (!loggedInUser) return <CircularProgress />;

  return (
    <Grid container xs={12} className={classes.profileContainer}>
      <NavBarProfile />
      <Grid item xs={9}>
        <Switch>
          <Route path={`${path}/profile-photo`} render={() => <EditProfilePicture loggedInUser={loggedInUser} />} />
          <Route exact path={`${path}/`} component={EditProfile} />
          <Route exact path={`${path}/payment`} component={ProfilePayment} />

          <Route path="*">
            <h1>Feature coming shortly </h1>
          </Route>
        </Switch>
      </Grid>
    </Grid>
  );
};

export default ProfileContainer;
