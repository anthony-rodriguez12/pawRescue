import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Auth } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(user: string, password: string) {
    this.http
      .post<Auth>(`${environment.apiUrl}/url/login`, {
        nombre: user,
        contrasenia: password,
      })
      .subscribe({
        next: (auth) => {
          localStorage.setItem('token', auth.token);
        },
        error: (err) => {
          throw new Error(err.message);
        },
      });
  }

  animals(){
    this.http.get(`${environment.apiUrl}/animal`).subscribe({
      next: (d) => { console.log(d) }
    })
  }
}
