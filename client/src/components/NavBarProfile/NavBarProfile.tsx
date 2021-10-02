import useStyles from './useStyles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link, useLocation } from 'react-router-dom';

const NavBarProfile = (): JSX.Element => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <Grid item xs={2} className={classes.navBarProfile}>
      <Box className={classes.profileLinksContainer}>
        <Link to="/profile/edit-profile" className={classes.routerLinkDecoration}>
          <Typography className={pathname === '/profile/edit-profile' ? classes.profileLink : classes.basicProfileLink}>
            Edit Profile
          </Typography>
        </Link>
        <Link to="/profile" className={classes.routerLinkDecoration}>
          <Typography
            className={pathname === '/profile/profile-photo' ? classes.profileLink : classes.basicProfileLink}
          >
            Profile Photo
          </Typography>
        </Link>
        <Link to="/profile" className={classes.routerLinkDecoration}>
          <Typography className={pathname === '/profile/payment' ? classes.profileLink : classes.basicProfileLink}>
            Payment
          </Typography>
        </Link>
        <Link to="/profile" className={classes.routerLinkDecoration}>
          <Typography className={pathname === '/profile/security' ? classes.profileLink : classes.basicProfileLink}>
            Security
          </Typography>
        </Link>
        <Link to="/profile" className={classes.routerLinkDecoration}>
          <Typography className={pathname === '/profile/settings' ? classes.profileLink : classes.basicProfileLink}>
            Settings
          </Typography>
        </Link>
      </Box>
    </Grid>
  );
};

export default NavBarProfile;
