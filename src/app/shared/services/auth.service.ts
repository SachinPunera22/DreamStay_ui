import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginUrl = 'http://localhost:3000/user/login';
  constructor(private http: HttpClient) {}

  login(data: any): Observable<User> {
    return this.http.post<User>(this.loginUrl,data);
  }
}
