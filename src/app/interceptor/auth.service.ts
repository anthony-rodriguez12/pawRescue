import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor  {
  // intercept(
  //   req: HttpRequest<any>,
  //   next: HttpHandler
  // ): Observable<HttpEvent<any>> {
  //   const authToken =
  //     localStorage.getItem('currentUser') &&
  //     localStorage.getItem('currentUser') != null
  //       ? localStorage.getItem('currentUser')
  //       : '';
  //   console.log('Outgoing HTTP request', req);

  //   if (authToken && authToken !== '') {
  //     const authReq = req.clone({
  //       setHeaders: {
  //         Authorization: `Bearer ${authToken}`,
  //       },
  //     });
  //     console.log(authReq);
  //     return next.handle(authReq);
  //   }

  //   return next.handle(req);
  // }
}
