import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Package } from '../models/package.model';
@Injectable({
  providedIn: 'root',
})
export class PackageService {
  apiUrl = 'http://localhost:3000/package';
  constructor(private http: HttpClient) {}

  all(): Observable<Package[]> {
    return this.http.get<Package[]>(this.apiUrl);
  }
}
