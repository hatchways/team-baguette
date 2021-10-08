import { Box, Typography } from '@material-ui/core';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import { useAuth } from '../../context/useAuthContext';
import { CircularProgress } from '@material-ui/core';
import { Conversation, ActiveConversationState } from '../../interface/Conversation';

import useStyles from './useStyles';

interface Props {
  conversation: Conversation;
  setActiveConversation: (arg0: ActiveConversationState) => void;
}

export default function ConversationBox({ conversation, setActiveConversation }: Props): JSX.Element {
  const classes = useStyles();
  const { loggedInUser } = useAuth();

  const findUser = () => {
    if (loggedInUser) {
      return conversation.users.find((user) => user.id !== loggedInUser.id);
    }
  };

  const user = findUser();

  const clickHandler = () => {
    if (conversation && user) {
      setActiveConversation({ id: conversation.id, otherUser: user });
    }
  };

  if (!user) return <CircularProgress />;

  return (
    <Box className={classes.conversation} onClick={clickHandler}>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <AvatarDisplay user={user} className={classes.avatar} />
      </Box>

      <Box display="flex" flexDirection="column" justifyContent="space-between" className={classes.content}>
        <Box>
          <Typography noWrap className={classes.name}>
            {user.name}
          </Typography>
          <Typography noWrap className={classes.previewText}>
            {conversation.latestMessage}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
