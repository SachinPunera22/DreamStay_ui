import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  token=localStorage.getItem("token")
  // registerUrl = 'http://localhost:3000/user/register';
  // userDetail='http://localhost:3000/user/'
  registerUrl = 'user/register';
  userDetail='user/'
  constructor(private http: HttpClient) {}

  all(): Observable<User[]> {
    return this.http.get<User[]>(this.registerUrl);
  }

  createUser(data: any): Observable<User> {
    return this.http.post<User>(this.registerUrl, data);
  }

  getUser(id:string):Observable<User> {
    if(!this.token)
    {
          console.log("No token")
    }
    return this.http.get<User>(this.userDetail+id,{
      headers:new HttpHeaders({'authorization':'Bearer '+this.token})
    });
  }
 
}
