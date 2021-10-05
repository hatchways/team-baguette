import React, { useEffect, useState } from 'react';
import { Box, Badge, Typography } from '@material-ui/core';
import { NotificationItem } from './NotificationItem';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { getNotifications, updateNotifications } from '../../helpers/APICalls/notification';
import { Notification } from '../../interface/Notification';
import { useSnackBar } from '../../context/useSnackbarContext';

export const Notifications: React.FC = () => {
  const [isHovering, setIsHovering] = useState(true);
  const [notifications, setNotifications] = useState<Array<Notification>>([]);
  const [badgeContent, setBadgeContent] = useState(1);
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (loggedInUser && loggedInUser.id) {
      updateNotifications(loggedInUser.id).then((res) => {
        if (res.success) {
          setBadgeContent(0);
        }
      });
    }
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    if (loggedInUser) {
      getNotifications().then((res) => {
        if (res.success) {
          setNotifications(res.success);
          setBadgeContent(1);
        } else {
          updateSnackBarMessage('No new notifications');
        }
      });
    }
  }, [loggedInUser, updateSnackBarMessage]);
  return (
    <Box onMouseEnter={handleMouseEnter}>
      <Box>
        <Badge badgeContent={badgeContent} classes={{ badge: classes.customBadge }} variant="dot">
          <Typography>Notifications</Typography>
        </Badge>
      </Box>
      <Box className={classes.dropDownContent} onMouseLeave={handleMouseLeave}>
        {isHovering &&
          notifications.map((notification) => <NotificationItem notification={notification} key={notification._id} />)}
      </Box>
    </Box>
  );
};
