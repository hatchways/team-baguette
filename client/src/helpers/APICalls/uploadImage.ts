import { AvatarApiData } from '../../interface/AvatarApiData';

interface FetchOptions {
  method: string;
  headers?: {
    'Content-Type': string;
  };
  body?: FormData;
  credentials: RequestCredentials;
}

const uploadImage = async (formData: FormData): Promise<AvatarApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'PUT',
    body: formData,
    credentials: 'include',
  };
  return await fetch(`/image/avatar`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default uploadImage;
