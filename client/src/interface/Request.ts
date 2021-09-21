export interface ReqValue {
    _id: string;
    user: User;
    sitterId: string;
    accepted: boolean;
    declined: boolean;
    dogType: string;
    end: Date;
    paid: boolean;
    specialNotes: string;
    start: Date;
  }
  
interface User {
  username: string;
  _id: string;
}
