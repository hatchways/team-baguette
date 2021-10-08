import { Avatar, Box, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Notification } from '../../interface/Notification';
import useStyles from './useStyles';

interface NotificationItemProps {
  notification: Notification;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({ notification }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (type: string) => {
    if (type === 'request') {
      history.push('/bookings');
    } else if (type === 'message') {
      history.push('/conversation');
    }
  };
  const formatDate = (value: Date) => {
    const date = new Date(value);
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    if (month.length === 1) {
      month = '0' + month;
    } else if (day.length === 1) {
      day = '0' + day;
    }
    return `${month}/${day}/${date.getFullYear()}`;
  };
  return (
    <Box className={classes.itemContainer} onClick={() => handleClick(notification.type)}>
      <Box>
        <Avatar alt="User Avatar" src={notification.sender.avatar} variant="square" className={classes.avatar} />
      </Box>
      <Box>
        <Typography className={classes.description}>{notification.description}</Typography>
        <Typography className={classes.title}>{notification.title}</Typography>
        <Typography className={classes.date}>{formatDate(notification.createdAt)}</Typography>
      </Box>
    </Box>
  );
};
