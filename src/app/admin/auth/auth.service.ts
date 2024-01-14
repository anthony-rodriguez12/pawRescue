import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SecureStorageService } from 'src/app/shared/services/secure-storage.service';
import { Session } from 'src/app/shared/interfaces/session.interface';
import { LoginService } from 'src/app/shared/services/login.service';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(
    private storageService: SecureStorageService,
    private loginService: LoginService,
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    if (this.loginService.isLoggedIn()) {
      const authToken = this.storageService.getItem<Session>('session');
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken!.token}`,
        },
      });
      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
