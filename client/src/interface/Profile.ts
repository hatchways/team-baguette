export interface Profile {
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: string;
  email: string;
  phone: number;
  address: string;
  description: string;
  gallery: string[];
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
export interface ProfileListing {
  firstName: string;
  lastName: string;
  description: string;
  address: string;
  user: {
    _id: string;
    avatar: string;
  };
}
export interface ProfileApiData {
  error?: { message: string };
  success?: Profile;
}
export interface ProfileListingApiData {
  error?: { message: string };
  success?: ProfileListing[];
}
