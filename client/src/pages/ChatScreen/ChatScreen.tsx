import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

import SideChatBar from '../../components/SideChatBar/SideChatBar';

import useStyles from './useStyles';

// TODO fill out with appropriate imports and actually submit it
// import { getProfileById } from '../../helpers/APICalls/profile';
// import MainProfileDetails from '../../components/ProfileDetails/MainProfileDetails';
// import ProfileBookingCard from '../../components/ProfileDetails/ProfileBookingCard';

// import { Profile } from '../../interface/Profile';

const randomText = [
  'What it do baby?',
  'Xavier Woods is an amazing wrestler',
  "NEO: The world ends with you isn't a bad game",
];

const randomUserName = ['paul blart', 'tedLasso2', 'LuLu', 'dannyWho?'];
const randomName = ['Naruto Uchiha', 'Yusuke Urameshi', 'Ted Lasso', 'Austin Creed', 'Black Dynamite'];

export default function ProfileDetails(): JSX.Element {
  const classes = useStyles();

  const conversations = [
    {
      id: `${Math.floor(Math.random() * 1000)}`,
      users: [
        {
          id: '6141d6b0fd48a965b0fc299d',
          username: randomUserName[Math.floor(Math.random() * randomUserName.length)],
          avatar: 'https://team-baguette-loving-sitter.s3.amazonaws.com/6141d6b0fd48a965b0fc299d/avatar.jpeg',
          name: 'Luis Reyes Bartolome',
        },
        {
          id: '2',
          username: randomUserName[Math.floor(Math.random() * randomUserName.length)],
          avatar: `https://avatars.dicebear.com/api/avataaars/${Math.floor(Math.random() * randomUserName.length)}.svg`,
          name: randomName[Math.floor(Math.random() * randomName.length)],
        },
      ],
      latestMessage: randomText[Math.floor(Math.random() * randomText.length)],
    },
    {
      id: `${Math.floor(Math.random() * 1000)}`,
      users: [
        {
          id: '6141d6b0fd48a965b0fc299d',
          username: randomUserName[Math.floor(Math.random() * randomUserName.length)],
          avatar: 'https://team-baguette-loving-sitter.s3.amazonaws.com/6141d6b0fd48a965b0fc299d/avatar.jpeg',
          name: randomName[Math.floor(Math.random() * randomName.length)],
        },
        {
          id: '2',
          username: randomUserName[Math.floor(Math.random() * randomUserName.length)],
          avatar: `https://avatars.dicebear.com/api/avataaars/${Math.floor(Math.random() * randomUserName.length)}.svg`,
          name: randomName[Math.floor(Math.random() * randomName.length)],
        },
      ],
      latestMessage: randomText[Math.floor(Math.random() * randomText.length)],
    },
    {
      id: `${Math.floor(Math.random() * 1000)}`,
      users: [
        {
          id: '6141d6b0fd48a965b0fc299d',
          username: randomUserName[Math.floor(Math.random() * randomUserName.length)],
          avatar: 'https://team-baguette-loving-sitter.s3.amazonaws.com/6141d6b0fd48a965b0fc299d/avatar.jpeg',
          name: randomName[Math.floor(Math.random() * randomName.length)],
        },
        {
          id: '2',
          username: randomUserName[Math.floor(Math.random() * randomUserName.length)],
          avatar: `https://avatars.dicebear.com/api/avataaars/${Math.floor(Math.random() * randomUserName.length)}.svg`,
          name: randomName[Math.floor(Math.random() * randomName.length)],
        },
      ],
      latestMessage: randomText[Math.floor(Math.random() * randomText.length)],
    },
    {
      id: `${Math.floor(Math.random() * 1000)}`,
      users: [
        {
          id: '6141d6b0fd48a965b0fc299d',
          username: randomUserName[Math.floor(Math.random() * randomUserName.length)],
          avatar: 'https://team-baguette-loving-sitter.s3.amazonaws.com/6141d6b0fd48a965b0fc299d/avatar.jpeg',
          name: randomName[Math.floor(Math.random() * randomName.length)],
        },
        {
          id: '2',
          username: randomUserName[Math.floor(Math.random() * randomUserName.length)],
          avatar: `https://avatars.dicebear.com/api/avataaars/${Math.floor(Math.random() * randomUserName.length)}.svg`,
          name: randomName[Math.floor(Math.random() * randomName.length)],
        },
      ],
      latestMessage: randomText[Math.floor(Math.random() * randomText.length)],
    },
    {
      id: `${Math.floor(Math.random() * 1000)}`,
      users: [
        {
          id: '6141d6b0fd48a965b0fc299d',
          username: randomUserName[Math.floor(Math.random() * randomUserName.length)],
          avatar: 'https://team-baguette-loving-sitter.s3.amazonaws.com/6141d6b0fd48a965b0fc299d/avatar.jpeg',
          name: randomName[Math.floor(Math.random() * randomName.length)],
        },
        {
          id: '2',
          username: randomUserName[Math.floor(Math.random() * randomUserName.length)],
          avatar: `https://avatars.dicebear.com/api/avataaars/${Math.floor(Math.random() * randomUserName.length)}.svg`,
          name: randomName[Math.floor(Math.random() * randomName.length)],
        },
      ],
      latestMessage: randomText[Math.floor(Math.random() * randomText.length)],
    },
  ];

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={5} md={3} className={classes.mainContent}>
        <SideChatBar conversations={conversations} />
      </Grid>
      <Grid item xs={12} sm={6} md={8} style={{ backgroundColor: 'green' }}>
        Massive chat screen
      </Grid>
    </Grid>
  );
}

// conversations {
//   id: blahblahblah,
//   users: ["userid1", "userid2"],
//   latestMessage: messageObject

// }

// message: {
//   id: blahblahblah,
//   user: userObject,
//   text: "blahblahblahblah",
//   read: boolean (default false),
//   createdAt: "date string",
//   conversationId: "conversationId"

// }
