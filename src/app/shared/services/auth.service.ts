import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { authUser } from '../models/authUser.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

 

  loginUrl = 'http://localhost:3000/user/login';
  constructor(private http: HttpClient) {}

  login(data: any): Observable<authUser> {
    return this.http.post<authUser>(this.loginUrl,data);
  }
}
