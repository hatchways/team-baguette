import Avatar from '@material-ui/core/Avatar';

import { User, UserFromProfile } from '../../interface/User';

interface Props {
  loggedIn?: boolean;
  user: User | UserFromProfile;
  className?: string;
}

const AvatarDisplay = ({ user, className }: Props): JSX.Element => {
  const avatarURL: string = user.avatar ? user.avatar : `https://robohash.org/${user.id}.png`;

  return <Avatar alt="Profile Image" src={avatarURL} className={className} />;
};

export default AvatarDisplay;
