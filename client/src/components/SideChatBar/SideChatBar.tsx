import { Grid, Box, Typography } from '@material-ui/core';
import Conversation from './Conversation';

import useStyles from './useStyles';

export default function ProfileDetails(): JSX.Element {
  const classes = useStyles();
  const conversations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const renderConversations = () => {
    return conversations.map((conversation, index) => <Conversation key={`sidebar conversation ${index}`} />);
  };

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}> Inbox Messages</Typography>
      <Box className={classes.conversationContainer}>{renderConversations()}</Box>
    </Box>
  );
}
