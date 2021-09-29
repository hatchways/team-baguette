const {UserFromProfile} = require("./User")

export interface Profile {
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: string;
  email: string;
  phone: number;
  address: string;
  description: string;
  owner?: boolean;
  gallery: string[];
  user?: typeof UserFromProfile;
}
export interface InitValue {
  firstName: string;
  lastName: string;
  gender: string;
  day: string;
  month: string;
  year: string;
  email: string;
  phone: number;
  address: string;
  description: string;
  gallery: string[];
}
export interface ProfileApiData {
  error?: { message: string };
  success?: Profile;
}
