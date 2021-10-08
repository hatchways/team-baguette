import { Box, Typography } from '@material-ui/core';
import useStyles from './useStyles';
import { Message } from '../../interface/Message';

interface Props {
  message: Message;
}

export default function UserMessage({ message }: Props): JSX.Element {
  const classes = useStyles();
  const {text} = message
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-end">
      <Box className={classes.message}>
        <Typography className={classes.messageText}>{text}</Typography>
      </Box>
    </Box>
  );
}
