import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdopcionesService {
  private apiUrl = 'https://par-vo7i.onrender.com/api';

  constructor(private http: HttpClient) { }

  getAllAdopciones(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/adopcion`);
  }

  GetEstudios(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/estudio`);
  }

  AddAdopcion(adopcionData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/adopcion`, adopcionData);
  }

  updateAdopción(adopcionData: any, idAdopcion: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/adopcion/${idAdopcion}`,adopcionData );
  }
  getAdopcionById(idAdopcion: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/adopcion/${idAdopcion}`);
  }


}
