import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  token:string
  constructor(private http: HttpClient) {
    
 
  }
  
  payment = 'payment/checkout-session/';
  booking="payment//userBooking/"
  getSession(id: any): Observable<any> {
    this.token = localStorage.getItem('token');
    if (!this.token) {
      console.log('No token');
    }
    return this.http.get<any>(this.payment + id, {
      headers: new HttpHeaders({ authorization: 'Bearer ' + this.token }),
    });
  }

  getBooking(id:any):Observable<any>{
    return this.http.get<any>(this.booking + id);
  }
  list():Observable<any>{
    return this.http.get<any>('payment/list');
  }
}
