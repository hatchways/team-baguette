import { useState, MouseEvent } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useAuth } from '../../context/useAuthContext';
import { Link } from 'react-router-dom';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import useStyles from './useStyles';

const AuthMenu = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { logout, loggedInUser } = useAuth();
  const classes = useStyles();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  const handleProfile = () => {
    setAnchorEl(null);
  };
  //TODO remove editprofiles/listing/bookings once navbar/sidebar is merged
  return (
    <div className={classes.avatarContainer}>
      <IconButton aria-label="show auth menu" aria-controls="auth-menu" aria-haspopup="true" onClick={handleClick}>
       {loggedInUser? <AvatarDisplay user={loggedInUser} /> : <AccountCircle className={classes.userAvatar} /> }
      </IconButton>
      <Menu
        id="auth-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        getContentAnchorEl={null}
      >
        <Link to="/edit/profile/">
          <MenuItem onClick={handleProfile}>Profile</MenuItem>
        </Link>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default AuthMenu;
