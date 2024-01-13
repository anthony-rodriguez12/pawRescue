import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';
import { Auth } from '../../client/interface';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { SecureStorageService } from './secure-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private storageService: SecureStorageService,
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
          this.storageService.setItem('session', {
            token: auth.token,
            username: user,
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

  isLoggedIn() {
    const isLoggedIn = this.storageService.getItem('session');
    console.log('isLoggedIn?', isLoggedIn);

    if (!isLoggedIn) {
      return false;
    }
    return true;
  }

  animals() {
    return this.http.get(`${environment.apiUrl}/animal`).subscribe({
      next: (d) => {
        console.log(d);
      },
      error: (err) => {
        throw new Error(err);
      },
    });
  }
}
