import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useHistory, Switch, Route } from 'react-router-dom';
import EditProfilePicture from '../../components/EditProfilePicture/EditProfilePicture';

export default function Settings(): JSX.Element {
  const classes = useStyles();

  const { loggedInUser } = useAuth();

  const history = useHistory();

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    return <CircularProgress />;
  }
  return (
    <Grid container component="main" className={`${classes.root} ${classes.settings}`}>
      <CssBaseline />
      <Grid item xs={12}>
        Header place holder
      </Grid>

      <Grid item className={classes.drawerWrapper}>
        A placeholder for the settings sidebar
      </Grid>
      <Grid item xs={12} sm={8} className={classes.mainContent}>
        <Switch>
          <Route path={`/settings/profile-picture`} render={() => <EditProfilePicture loggedInUser={loggedInUser} />} />
        </Switch>
      </Grid>
    </Grid>
  );
}
