import { Box, Typography } from '@material-ui/core';
import useStyles from './useStyles';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import { Message } from '../../interface/Message';

interface Props {
  message: Message;
}

export default function OtherMessage({message}:Props): JSX.Element {
  const classes = useStyles();
  const {user,text} = message

  return (
    <Box display="flex">
      <AvatarDisplay
      className={classes.otherAvatar}
        user={user}
      />

      <Box className={classes.otherMessage}>
        <Typography className={classes.messageText}>{text}</Typography>
      </Box>
    </Box>
  );
}
