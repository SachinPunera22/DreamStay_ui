import { User } from '../models/user.model';

export interface authUser {
    user:User;
    token:string;
  }
  