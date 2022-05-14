import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Package } from '../models/package.model';
@Injectable({
  providedIn: 'root',
})
export class PackageService {
  // packageListUrl = 'http://localhost:3000/package';
  // packageDetail='http://localhost:3000/package/packageDetail';
  packageListUrl = 'package';
  packageDetail='package/packageDetail';

  constructor(private http: HttpClient) {}

  all(): Observable<Package[]> {
    return this.http.get<Package[]>(this.packageListUrl);
  }

  getPackage(id:any):Observable<Package> {
    return this.http.get<Package>(this.packageDetail+"/"+id);
  }
}
