const { UserFromProfile } = require('./User');

export interface Message {
  id: string;
  user: InstanceType<typeof UserFromProfile>;
  text: string;
  read: boolean;
  createdAt?: string;
  conversationId?: string;
}
