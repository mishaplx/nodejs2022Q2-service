export class User {
  id: string; // uuid v4
  login: string;
  password: string;
  version: number; // integer number, increments on update
  createdAt: string; // timestamp of creation
  updatedAt: number; // timestamp of last update
}
