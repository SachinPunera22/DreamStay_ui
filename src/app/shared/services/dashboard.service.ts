import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  token:string
  constructor(private http: HttpClient) {
    
 
  }
  
   getDetails():Observable<any>{
    return this.http.get<any>("dashboard/details" );
  }
  
}
