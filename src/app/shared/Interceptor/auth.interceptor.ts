import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private API_URL = environment.API_URL;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = this.setUrl(req);
    return next.handle(req);
  }

 private setUrl(req: HttpRequest<any>): HttpRequest<any> {
     const url=this.API_URL
    return req.clone({ url: url + req.url });
  }
}