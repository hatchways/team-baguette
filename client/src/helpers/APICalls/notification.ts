import { NotificationApiData } from '../../interface/Notification';
import { FetchOptions } from '../../interface/FetchOptions';

export const getNotifications = async (): Promise<NotificationApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/notification/unread`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Failed to get notifications' },
    }));
};
export const updateNotifications = async (id: string): Promise<NotificationApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/notification/${id}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Failed to update user profile' },
    }));
};
