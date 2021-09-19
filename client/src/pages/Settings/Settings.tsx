import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory, Switch, Route, Link } from 'react-router-dom';
import ChatSideBanner from '../../components/ChatSideBanner/ChatSideBanner';
import { useEffect } from 'react';
import EditProfilePicture from '../../components/EditProfilePicture/EditProfilePicture';

export default function Settings(): JSX.Element {
  const classes = useStyles();

  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();

  const history = useHistory();

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }
  return (
    <Grid container component="main" className={`${classes.root} ${classes.settings}`}>
      <CssBaseline />
      <Grid item className={classes.drawerWrapper}>
        <ChatSideBanner loggedInUser={loggedInUser} />
      </Grid>
      <Grid item xs={12} sm={8} className={classes.mainContent}>
        <Switch>
          <Route path={`/settings/profile_picture`} render={() => <EditProfilePicture loggedInUser={loggedInUser} />} />

          <Route path="*" render={() => <Link to={'/settings/profile_picture'}>edit avatar</Link>} />
        </Switch>
      </Grid>
    </Grid>
  );
}
