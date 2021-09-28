import { useLocation } from 'react-router';
import useStyles from './useStyles';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import { useAuth } from '../../context/useAuthContext';
import AuthMenu from '../AuthMenu/AuthMenu';
import { useHistory } from 'react-router-dom';

const withoutRoutes = ['/login', '/signup'];

const NavBarTop = (): JSX.Element | null => {
  const { pathname } = useLocation();
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const history = useHistory();

  const handleMySitters = () => {
    history.push('/bookings');
  };

  const handleMessages = () => {
    history.push('/dashboard');
  };

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
            <Typography onClick={handleMySitters} className={classes.userOptions}>
              My Sitters
            </Typography>
            <Typography onClick={handleMessages} className={classes.userOptions}>
              Messages
            </Typography>
            {/* TODO : check loggedInUser.avatar to conditionally render blank avy pic or user's avy  */}
            <AuthMenu />
          </>
        ) : (
          <>
            <Button
              href="/login"
              style={{ backgroundColor: 'transparent' }}
              size="large"
              variant="contained"
              className={classes.login}
            >
              Login
            </Button>
            <Button
              href="/signup"
              style={{ backgroundColor: 'rgb(240, 69, 69' }}
              size="large"
              variant="contained"
              color="secondary"
              className={classes.signUp}
            >
              Sign up
            </Button>
          </>
        )}
      </Box>
    </Grid>
  );
};

export default NavBarTop;
