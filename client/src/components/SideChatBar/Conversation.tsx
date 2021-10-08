import { Box, Typography } from '@material-ui/core';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';

import useStyles from './useStyles';

export default function Conversation(): JSX.Element {
  const classes = useStyles();

  const user = {
    id: 'blahblahblah',
    username: 'madeup username',
    avatar: 'https://static.tvtropes.org/pmwiki/pub/images/dds4x28_2f1d8cd2_526e_4994_b8d9_82515a660af0_5.jpg',
  };

  return (
    <Box className={classes.conversation}>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <AvatarDisplay user={user} className={classes.avatar} />
      </Box>

      <Box display="flex" flexDirection="column" justifyContent="space-between" className={classes.content}>
        <Box>
          <Typography className={classes.name}>{user.username}</Typography>
          blahblahblah
        </Box>
      </Box>
    </Box>
  );
}
