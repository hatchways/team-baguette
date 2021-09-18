import { FetchOptions } from '../../interface/FetchOptions';
import { ProfileApiData } from '../../interface/Profile';

export const createProfile = async (
  firstName: string,
  lastName: string,
  gender: string,
  birthDate: string,
  email: string,
  phone: string,
  address: string,
  description: string,
): Promise<ProfileApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, gender, birthDate, email, phone, address, description }),
    credentials: 'include',
  };
  return await fetch(`/profiles`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Failed to create user profile' },
    }));
};
export const updateProfile = async (
  firstName: string,
  lastName: string,
  gender: string,
  birthDate: string,
  email: string,
  phone: string,
  address: string,
  description: string,
): Promise<ProfileApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, gender, birthDate, email, phone, address, description }),
    credentials: 'include',
  };
  return await fetch(`/profiles`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Failed to update user profile' },
    }));
};
export const getProfileById = async (id: string): Promise<ProfileApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/profiles/${id}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Failed to get user profile' },
    }));
};
