import React, { useState } from 'react';
import { Box, Badge, Typography } from '@material-ui/core';
import { NotificationItem } from './NotificationItem';
import { Dummy } from './DummyData';
import useStyles from './useStyles';

export const Notification: React.FC = () => {
  const [isHovering, setIsHovering] = useState(true);
  const classes = useStyles();
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <Box onMouseEnter={handleMouseEnter}>
      <Box>
        <Badge color="primary" variant="dot">
          <Typography>Notifications</Typography>
        </Badge>
      </Box>
      <Box className={classes.dropDownContent} onMouseLeave={handleMouseLeave}>
        {isHovering && Dummy.map((item) => <NotificationItem notification={item} key={item.id} />)}
      </Box>
    </Box>
  );
};
