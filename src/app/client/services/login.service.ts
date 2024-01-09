import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Auth } from '../interface';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // constructor(private http: HttpClient, private _snackBar: SnackbarService) {}

  // login(user: string, password: string) {
  //   this.http
  //     .post<Auth>(`${environment.apiUrl}/usuario/login`, {
  //       nombre: user,
  //       contrasenia: password,
  //     })
  //     .subscribe({
  //       next: (auth) => {
  //         console.log(auth);
  //         this._snackBar.sucess('¡Inicio de sesión exitoso!','Has iniciado sesión correctamente en tu cuenta.')
  //         localStorage.setItem('token', auth.token);
  //       },
  //       error: () => {
  //         console.log("ERRO!!")
  //         this._snackBar.danger('Inicio de sesión fallido', 'Lo sentimos, por favor e intenta nuevamente.');
  //       },
  //     });
  // }

  // animals(){
  //   return this.http.get(`${environment.apiUrl}/animal`).subscribe({
  //     next: (d) => { console.log(d) },
  //     error: (err) => { throw new Error(err)}
  //   })
  // }
}
