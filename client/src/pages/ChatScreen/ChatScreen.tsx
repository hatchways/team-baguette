import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

import SideChatBar from '../../components/SideChatBar/SideChatBar';
import ActiveConversation from '../../components/ActiveConversation/ActiveConversation';
import {ActiveConversationState} from '../../interface/Conversation'

import useStyles from './useStyles';



const randomText = [
  'Let me know what you think?',
  "What a cute puppy. I'd be honored to sit for him",
  "Let me know what time works for you",
];

const conversations = [
  {
    id: `1`,
    users: [
      {
        id: '6141d6b0fd48a965b0fc299d',
        username: "luis",
        avatar: 'https://team-baguette-loving-sitter.s3.amazonaws.com/6141d6b0fd48a965b0fc299d/avatar.jpeg',
        name: 'Luis Reyes Bartolome',
      },
      {
        id: '2',
        username: "Paul Blart",
        avatar: `https://avatars.dicebear.com/api/avataaars/PaulBlart.svg`,
        name: "Paul Blart",
      },
    ],
    latestMessage: randomText[Math.floor(Math.random() * randomText.length)],
  },
  {
    id: `2`,
    users: [
      {
        id: '6141d6b0fd48a965b0fc299d',
        username: "luis",
        avatar: 'https://team-baguette-loving-sitter.s3.amazonaws.com/6141d6b0fd48a965b0fc299d/avatar.jpeg',
        name: 'Luis Reyes Bartolome',
      },
      {
        id: '2',
        username: "Xavier Woods",
        avatar: "https://avatars.dicebear.com/api/avataaars/$XavierWoods.svg",
        name: "Xavier Woods",
      },
    ],
    latestMessage: randomText[Math.floor(Math.random() * randomText.length)],
  },
  {
    id: `3`,
    users: [
      {
        id: '6141d6b0fd48a965b0fc299d',
        username: "luis",
        avatar: 'https://team-baguette-loving-sitter.s3.amazonaws.com/6141d6b0fd48a965b0fc299d/avatar.jpeg',
        name: 'Luis Reyes Bartolome',
      },
      {
        id: '2',
        username: "MariaSantana",
        avatar: "https://avatars.dicebear.com/api/avataaars/MariaSantana.svg",
        name: "Maria Santana",
      },
    ],
    latestMessage: randomText[Math.floor(Math.random() * randomText.length)],
  },
  {
    id: `4`,
    users: [
      {
        id: '6141d6b0fd48a965b0fc299d',
        username: "luis",
        avatar: 'https://team-baguette-loving-sitter.s3.amazonaws.com/6141d6b0fd48a965b0fc299d/avatar.jpeg',
        name: 'Luis Reyes Bartolome',
      },
      {
        id: '2',
        username: "SiuLSeyer",
        avatar: `https://avatars.dicebear.com/api/avataaars/Siul Seyer.svg`,
        name: "Siul Seyer",
      },
    ],
    latestMessage: randomText[Math.floor(Math.random() * randomText.length)],
  },
  {
    id: `5`,
    users: [
      {
        id: '6141d6b0fd48a965b0fc299d',
        username: "luis",
        avatar: 'https://team-baguette-loving-sitter.s3.amazonaws.com/6141d6b0fd48a965b0fc299d/avatar.jpeg',
        name: 'Luis Reyes Bartolome',
      },
      {
        id: '2',
        username: "upupdowndown",
        avatar: `https://avatars.dicebear.com/api/avataaars/upupdowndown.svg`,
        name: "Austin Creed",
      },
    ],
    latestMessage: randomText[Math.floor(Math.random() * randomText.length)],
  },
];



export default function ProfileDetails(): JSX.Element {
  const classes = useStyles();
  const [activeConversation, setActiveConversation] = useState<ActiveConversationState>();

  // TODO need to make a useEffect that automatically pulls all the conversations the user has. should hit the backend for this on [] dependency
  

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={5} md={3} className={classes.mainContent}>
        <SideChatBar conversations={conversations} setActiveConversation={setActiveConversation}/>
      </Grid>
      <Grid item xs={12} sm={6} md={8}>
        {activeConversation && (
          <ActiveConversation otherUser={activeConversation.otherUser} conversationId={activeConversation.id} />
        )}
      </Grid>
    </Grid>
  );
}

