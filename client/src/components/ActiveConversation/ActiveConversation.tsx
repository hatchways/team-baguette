import { Box, Typography } from '@material-ui/core';
import { UserFromProfile } from '../../interface/User';
import ConversationHeader from './ConversationHeader';
import UserMessage from './UserMessage';
import OtherMessage from './OtherMessage';
import InputBar from './InputBar';
import { CircularProgress } from '@material-ui/core';

import { useAuth } from '../../context/useAuthContext';

import useStyles from './useStyles';

interface Props {
  conversationId: string;
  otherUser: UserFromProfile;
}

export default function ActiveConversation({ conversationId, otherUser }: Props): JSX.Element {
  const classes = useStyles();

  const { loggedInUser } = useAuth();

  if (!loggedInUser) return <CircularProgress />

// TODO need to remove hardcoded messages, and have this hit a route in the backend once a conversationId is passed to it. The backend should give back an array of relevant messages
// need to use useEffect with a dependecy on conversationId to hit that route in the backend and pull new set of messages per conversation
  const messages = [
    {
      id: '111111',
      user: loggedInUser,
      text: `Hi ${otherUser.name}, i saw your profile and was really interested.`,
      read: true,
      createdAt: 'date string',
      conversationId: 'conversationId',
    },
    {
      id: '111121',
      user: otherUser,
      text: `Hey ${loggedInUser.username}, my name is ${otherUser.name}. Thanks for reaching out to me!`,
      read: true,
      createdAt: 'date string',
      conversationId: 'conversationId',
    },
    {
      id: '114111',
      user: otherUser,
      text: 'Tell me about your dog?',
      read: true,
      createdAt: 'date string',
      conversationId: 'conversationId',
    },
    {
      id: '15111',
      user: loggedInUser,
      text: 'Her name is April. She is a 6 year-old retreiver. Im going on vacation for 4 days and had some questions for you',
      read: true,
      createdAt: 'date string',
      conversationId: 'conversationId',
    },

    {
      id: '2211111',
      user: otherUser,
      text: 'That sounds great. Ask away',
      read: true,
      createdAt: 'date string',
      conversationId: 'conversationId',
    },
  ];

 

  const renderMessages = () => {
    return messages.map((message, index) => {
      return message.user.id === loggedInUser.id ? (
        <UserMessage key={`message ${index}`} message={message} />
      ) : (
        <OtherMessage key={`message ${index}`} message={message} />
      );
    });
  };

  return (
    <Box display="flex" flexDirection="column">
      <ConversationHeader otherUser={otherUser} />
      <Box className={classes.container}>
        <Box>{renderMessages()}</Box>

        <InputBar />
      </Box>
    </Box>
  );
}
