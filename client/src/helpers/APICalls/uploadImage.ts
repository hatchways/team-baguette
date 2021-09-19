import { AuthApiData } from '../../interface/AuthApiData';

interface FetchOptions {
  method: string;
  headers?: {
    'Content-Type': string;
  };
  body?: FormData;
  credentials: RequestCredentials;
}

const uploadImage = async (formData: FormData): Promise<AuthApiData> => {
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
