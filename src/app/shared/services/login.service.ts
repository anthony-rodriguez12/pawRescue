import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';
import { Auth } from '../../client/interface';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private _snackBar: SnackbarService,
  ) {}

  loggout() {
    localStorage.removeItem('token');
    this._snackBar.sucess(
      '¡Cerraste de sesión!',
      'Has Cerrado sesión exisosamente',
    );
    this.router.navigate(['/pawstorescue/home']);
    sessionStorage.removeItem('username');
  }

  login(user: string, password: string) {
    this.http
      .post<Auth>(`${environment.apiUrl}/usuario/login`, {
        nombre: user,
        contrasenia: password,
      })
      .subscribe({
        next: (auth) => {
          console.log(auth);
          this._snackBar.sucess(
            '¡Inicio de sesión exitoso!',
            'Has iniciado sesión correctamente en tu cuenta.',
          );
          localStorage.setItem('token', auth.token);
          this.router.navigate(['/admin/panel']);
          sessionStorage.setItem('username', user);
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
    const isLoggedIn = localStorage.getItem('token');
    const user = sessionStorage.getItem('username');
    console.log('isLoggedIn?', isLoggedIn);
    console.log('user?', user);
    if (!isLoggedIn || !user) {
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
