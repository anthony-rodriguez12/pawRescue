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


  AddApadrinamiento(apadrinamiento: any): Observable<any> {    
    return this.http.post<any>(`${this.apiUrl}/apadrinamiento`, apadrinamiento);
  }

  updateApadrinamiento(apadrinamiento: any, idApadrinamiento: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/apadrinamiento/${idApadrinamiento}`,apadrinamiento );
  }
  getApadrinamientoByID(idApadrinamiento: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/apadrinamiento/${idApadrinamiento}`);
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
