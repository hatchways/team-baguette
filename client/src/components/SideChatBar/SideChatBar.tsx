import { Box, Typography } from '@material-ui/core';
import ConversationBox from './ConversationBox';
import { Conversation, ActiveConversationState } from '../../interface/Conversation';

import useStyles from './useStyles';

interface Props {
  conversations: Array<Conversation>;
  setActiveConversation: (arg0: ActiveConversationState) => void
}

export default function ProfileDetails({ conversations, setActiveConversation }: Props): JSX.Element {
  const classes = useStyles();

  const renderConversations = () => {
    return conversations.map((conversation) => (
      <ConversationBox key={`sidebar conversation ${conversation.id}`} conversation={conversation}  setActiveConversation={setActiveConversation}/>
    ));
  };

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}> Inbox Messages</Typography>
      <Box className={classes.conversationContainer}>
        {conversations.length ? (
          renderConversations()
        ) : (
          <Typography className={classes.title} align="center">
            No conversations yet
          </Typography>
        )}
      </Box>
    </Box>
  );
}