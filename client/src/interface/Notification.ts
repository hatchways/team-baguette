export interface Notification {
  _id: string;
  read: boolean;
  type: string;
  title: string;
  createdAt: Date;
  description: string;
  sender: {
    _id: string;
    avatar: string;
  };
}

export interface NotificationApiData {
  error?: { message: string };
  success?: Notification[];
}
