import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  token = localStorage.getItem('token');
  constructor(private http: HttpClient) {
    console.log('token in service:' + this.token);
 
  }
  
  payment = 'payment/checkout-session/';

  getSession(id: any): Observable<any> {
    if (!this.token) {
      console.log('No token');
    }
    return this.http.get<any>(this.payment + id, {
      headers: new HttpHeaders({ authorization: 'Bearer ' + this.token }),
    });
  }
}
