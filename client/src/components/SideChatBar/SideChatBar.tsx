import { Grid, Box, Typography } from '@material-ui/core';
import Conversation from './Conversation';

import useStyles from './useStyles';

type conversation = {
  id: string,
  users: string[],
  latestMessage: string
}

interface Props {
  conversations: Array<conversation>
}



export default function ProfileDetails({conversations}: Props): JSX.Element {
  const classes = useStyles();

  const renderConversations = () => {
    return conversations.map((conversation) => <Conversation key={`sidebar conversation ${conversation.id}`} conversation={conversation}/>);
  };

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}> Inbox Messages</Typography>
      <Box className={classes.conversationContainer}>{renderConversations()}</Box>
    </Box>
  );
}
