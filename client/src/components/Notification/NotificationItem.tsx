import { Avatar, Box, Typography } from '@material-ui/core';
import React from 'react';
import { Notification } from '../../interface/Notification';
import useStyles from './useStyles';

interface NotificationItemProps {
  notification: Notification;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({ notification }) => {
  const classes = useStyles();
  return (
    <Box className={classes.itemContainer}>
      <Box>
        <Avatar alt="User Avatar" src={notification.avatar} variant="square" className={classes.avatar} />
      </Box>
      <Box>
        <Typography className={classes.description}>{notification.description}</Typography>
        <Typography className={classes.title}>{notification.title}</Typography>
        <Typography className={classes.date}>{notification.date}</Typography>
      </Box>
    </Box>
  );
};
