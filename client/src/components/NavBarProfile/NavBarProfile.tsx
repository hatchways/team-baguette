import useStyles from './useStyles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBarProfile = (): JSX.Element => {
  const classes = useStyles();
  const [active, setActive] = useState(new Array<boolean>(false, false, false, false, false));

  const toggleClass = (ind: number) => {
    const newActiveState = [false, false, false, false, false];
    newActiveState[ind] = true;
    setActive(newActiveState);
  };

  return (
    <Grid item xs={2} className={classes.navBarProfile}>
      <Box className={classes.profileLinksContainer}>
        <Link to="/profile/editprofile" className={classes.routerLinkDecoration}>
          <Typography
            onClick={() => toggleClass(0)}
            className={active[0] ? `${classes.profileLink}` : `${classes.basicProfileLink}`}
          >
            Edit Profile
          </Typography>
        </Link>
        <Link to="/profile" className={classes.routerLinkDecoration}>
          <Typography
            onClick={() => toggleClass(1)}
            className={active[1] ? `${classes.profileLink}` : `${classes.basicProfileLink}`}
          >
            Profile Photo
          </Typography>
        </Link>
        <Link to="/profile" className={classes.routerLinkDecoration}>
          <Typography
            onClick={() => toggleClass(2)}
            className={active[2] ? `${classes.profileLink}` : `${classes.basicProfileLink}`}
          >
            Payment
          </Typography>
        </Link>
        <Link to="/profile" className={classes.routerLinkDecoration}>
          <Typography
            onClick={() => toggleClass(3)}
            className={active[3] ? `${classes.profileLink}` : `${classes.basicProfileLink}`}
          >
            Security
          </Typography>
        </Link>
        <Link to="/profile" className={classes.routerLinkDecoration}>
          <Typography
            onClick={() => toggleClass(4)}
            className={active[4] ? `${classes.profileLink}` : `${classes.basicProfileLink}`}
          >
            Settings
          </Typography>
        </Link>
      </Box>
    </Grid>
  );
};

export default NavBarProfile;
