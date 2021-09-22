import { AvatarApiData } from '../../interface/AvatarApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const deleteAvatar = async (): Promise<AvatarApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/image/avatar`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default deleteAvatar;
