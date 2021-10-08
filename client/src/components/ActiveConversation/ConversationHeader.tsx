import { Box, Typography } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import { UserFromProfile } from '../../interface/User';

import useStyles from './useStyles';

interface Props {
  otherUser: UserFromProfile;
}

export default function ConversationHeader({ otherUser }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Box className={classes.headerBar} display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center" justifyContent="center" className={classes.headerName}>
        <AvatarDisplay user={otherUser} className={classes.headerAvatar} />

        <Typography variant="h5"> {otherUser.name} </Typography>
      </Box>
      <MoreHorizIcon className={classes.ellipsis} />
    </Box>
  );
}
