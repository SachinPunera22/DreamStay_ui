import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://localhost:3000/register';
  constructor(private http: HttpClient) {}

  all(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  create(data: any): Observable<User[]> {
    return this.http.post<User[]>(this.apiUrl, data);
  }
}
