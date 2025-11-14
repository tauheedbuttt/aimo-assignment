export interface FilterType {
  nat?: string;
  results?: number;
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

export interface ApiError {
  response: {
    data: {
      timestamp: string;
      status: number;
      error: string;
      message: string;
      path: string;
    };
  };
}
