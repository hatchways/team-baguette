import { useLocation } from 'react-router';
import useStyles from './useStyles';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import { useAuth } from '../../context/useAuthContext';
import AuthMenu from '../AuthMenu/AuthMenu';
import { Link } from 'react-router-dom';
import { Notifications } from '../Notification/Notifications';

const withoutRoutes = ['/login', '/signup'];

const NavBarTop = (): JSX.Element | null => {
  const { pathname } = useLocation();
  const classes = useStyles();
  const { loggedInUser } = useAuth();

  if (withoutRoutes.some((item) => pathname.includes(item))) return null;

  return (
    <Grid container className={classes.navBarContainer}>
      <Box className={classes.navBarItem}>
        <PetsIcon className={classes.pawIcon} />
        <Typography className={classes.navTitle}>LovingSitter.</Typography>
      </Box>
      <Box className={classes.navBarItemRight}>
        <Typography className={classes.becomeSitter}>Become a sitter</Typography>
        {loggedInUser ? (
          <>
            <Box className={classes.routerLinkDecoration}>
              <Notifications />
            </Box>
            <Link to="/bookings" className={classes.routerLinkDecoration}>
              <Typography className={classes.userOptions}>My Sitters</Typography>
            </Link>
            <Link to="/conversations" className={classes.routerLinkDecoration}>
              <Typography className={classes.userOptions}>Messages</Typography>
            </Link>
            <AuthMenu />
          </>
        ) : (
          <>
            <Button href="/login" size="large" variant="contained" className={classes.login}>
              Login
            </Button>
            <Button href="/signup" size="large" variant="contained" color="secondary" className={classes.signUp}>
              Sign up
            </Button>
          </>
        )}
      </Box>
    </Grid>
  );
};

export default NavBarTop;
