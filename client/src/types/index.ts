export interface FilterType {
  country?: string;
  users?: number;
}

export interface DateOfBirth {
  date: string;
  age: number;
}

export interface IUser {
  id: string;
  gender: string;
  country: string;
  name: string;
  email: string;
  dob: {
    date: string;
    age: number;
  };
  phone: string;
  petImage: string;
}
