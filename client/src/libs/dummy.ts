import type { IUser } from "../types";

export const dummyUsers: IUser[] = [
  {
    id: "1",
    gender: "male",
    country: "USA",
    name: "John Doe",
    email: "john.doe@example.com",
    dob: {
      date: "1968-03-29T05:26:03.876Z",
      age: 31,
    },
    phone: "123-456-7890",
    petImage: "https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_734.jpg",
  },
  {
    id: "2",
    gender: "female",
    country: "FI",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    dob: {
      date: "1968-03-29T05:26:03.876Z",
      age: 26,
    },
    phone: "987-654-3210",
    petImage:
      "https://images.dog.ceo/breeds/rough-collie/1Dog-rough-collie-portrait.jpg",
  },
  {
    id: "3",
    gender: "male",
    country: "UK",
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    dob: {
      date: "1968-03-29T05:26:03.876Z",
      age: 32,
    },
    phone: "555-123-4567",
    petImage: "https://images.dog.ceo/breeds/groenendael/n02105056_7407.jpg",
  },
  {
    id: "4",
    gender: "female",
    country: "FI",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    dob: {
      date: "1968-03-29T05:26:03.876Z",
      age: 29,
    },
    phone: "444-555-6666",
    petImage:
      "https://images.dog.ceo/breeds/terrier-tibetan/n02097474_5820.jpg",
  },
];
