import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/localStorage.service';

const TOKEN_HEADER_KEY = 'Authorization';  

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private localStorageService: LocalStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authRequest: HttpRequest<any> = request;
    const token = this.localStorageService.getToken();
    if (token != null)
      authRequest = authRequest.clone({ headers: authRequest.headers.set(TOKEN_HEADER_KEY, "Bearer " + token) });
    return next.handle(request);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];