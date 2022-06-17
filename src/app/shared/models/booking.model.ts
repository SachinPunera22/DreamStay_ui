import { Package } from './package.model';
import { User } from './user.model';
export interface Booking {
    _id: string;
   bookingName: string;
    // email: string;
    // password: string;
    // token:string;
  }
  export interface bookingList{
    _id: string;
    bookingName: string;
  
   package:Package;
   user:User
  } 