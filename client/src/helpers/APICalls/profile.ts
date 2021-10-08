import { FetchOptions } from '../../interface/FetchOptions';
import { ProfileApiData, ProfileListingApiData } from '../../interface/Profile';

export const createProfile = async (
  firstName: string,
  lastName: string,
  gender: string,
  birthDate: string,
  email: string,
  phone: number,
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
  phone: number,
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
export const getProfileByUserId = async (id: string): Promise<ProfileApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/profiles/user/${id}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Failed to get user profile' },
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
      error: { message: 'There was an issue while communicating with the server. Please try again later.' },
    }));
};
export const searchProfiles = async (
  query: string,
  from: Date | null,
  to: Date | null,
): Promise<ProfileListingApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/profiles?query=${query}&from=${from}&to=${to}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Failed to get user profile' },
    }));
};
