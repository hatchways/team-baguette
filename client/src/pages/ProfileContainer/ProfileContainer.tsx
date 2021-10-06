import useStyles from './useStyles';
import Grid from '@material-ui/core/Grid';
import NavBarProfile from '../../components/NavBarProfile/NavBarProfile';
import { EditProfile } from '../EditProfile/EditProfile';
import { Switch, Route } from 'react-router-dom';

const ProfileContainer = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container xs={12} className={classes.profileContainer}>
      <NavBarProfile />
      <Grid item xs={9}>
        <Switch>
          <Route path="/profile/edit-profile">
            <EditProfile />
          </Route>
        </Switch>
      </Grid>
    </Grid>
  );
};

export default ProfileContainer;
