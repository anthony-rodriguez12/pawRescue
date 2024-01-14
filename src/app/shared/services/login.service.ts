import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';
import { Auth } from '../interfaces';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { SecureStorageService } from './secure-storage.service';
import { Session } from '../interfaces/session.interface';
import { MomentService } from './moment.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private storageService: SecureStorageService,
    private momentService: MomentService,
    private _snackBar: SnackbarService,
  ) {}

  loggout() {
    this.storageService.removeItem('session');
    this._snackBar.sucess(
      '¡Cerraste de sesión!',
      'Has Cerrado sesión exisosamente',
    );
    this.router.navigate(['/pawstorescue/home']);
  }

  login(user: string, password: string) {
    this.http
      .post<Auth>(`${environment.apiUrl}/usuario/login`, {
        nombre: user,
        contrasenia: password,
      })
      .subscribe({
        next: (auth) => {
          this._snackBar.sucess(
            '¡Inicio de sesión exitoso!',
            'Has iniciado sesión correctamente en tu cuenta.',
          );
          this.storageService.setItem<Session>('session', {
            token: auth.token,
            username: user,
            expedition: this.momentService.getCurrentDate(),
          });
          this.router.navigate(['/admin/panel']);
        },
        error: () => {
          this._snackBar.danger(
            'Inicio de sesión fallido',
            'Lo sentimos, por favor e intenta nuevamente.',
          );
        },
      });
  }

  isLoggedIn(): boolean {
    const isLoggedIn = this.storageService.getItem<Session>('session');

    if (!isLoggedIn) return false;
    if (!isLoggedIn.username && !isLoggedIn.token && !isLoggedIn.expedition)
      return false;

    const interval = this.momentService.getDiffWithCurrentDate(
      isLoggedIn.expedition,
    );
    if (interval >= 3) {
      return false;
    }
    return true;
  }
}
