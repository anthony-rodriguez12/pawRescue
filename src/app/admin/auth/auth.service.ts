import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken =
      localStorage.getItem('currentUser') &&
      localStorage.getItem('currentUser') != null
        ? localStorage.getItem('currentUser')
        : '';

    if (authToken && authToken !== '') {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log(authReq);
      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
