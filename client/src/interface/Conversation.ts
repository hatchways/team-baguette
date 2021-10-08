const { UserFromProfile } = require('./User');


export interface Conversation {
  id: string;
  users: Array<InstanceType<typeof UserFromProfile>>;
  latestMessage: string;
}
