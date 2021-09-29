import Avatar from '@material-ui/core/Avatar';
import { classicNameResolver } from 'typescript';
import { User } from '../../interface/User';

interface Props {
  loggedIn: boolean;
  user: User;
  className?: string;
}

const AvatarDisplay = ({ user, className }: Props): JSX.Element => {
  const avatarURL: string = user.avatar ? user.avatar : `https://robohash.org/${user.email}.png`;

  return <Avatar alt="Profile Image" src={avatarURL} className={className} />;
};

export default AvatarDisplay;
