import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApadrinamientoService {
  private apiUrl = 'https://par-vo7i.onrender.com/api';

  constructor(private http: HttpClient) { }

  getAllApadrinamiento(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/apadrinamiento`);  }


  AddApadrinamiento(adopcionData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/apadrinamiento`, adopcionData);
  }

  updateApadrinamiento(adopcionData: any, idAdopcion: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/apadrinamiento/${idAdopcion}`,adopcionData );
  }
  getApadrinamientoByID(idAdopcion: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/apadrinamiento/${idAdopcion}`);
  }
}


//Interface

export interface EditApadrinamiento {
  nombre: string
  apellido: string
  fechaCreacion: string
  direccion: string
  telefono: string
  correo: string
  motivo: string
  monto: number
  idAnimal: number
  idPeriodicidad: number
  idEstado: number
}

export interface GedApadrinamiento {
  idApadrinamiento: number
  nombre: string
  apellido: string
  fechaCreacion: string
  direccion: string
  telefono: string
  correo: string
  motivo: string
  monto: number
  idAnimal: number
  idPeriodicidad: number
  idEstado: number
}
