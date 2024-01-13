import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralResponse, Pets } from 'src/app/shared/interfaces';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAnimals(): Observable<GeneralResponse<Pets[]>> {
    return this.http.get<GeneralResponse<Pets[]>>(`${this.apiUrl}/animal`);
  }

  AddAnimal(animalData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/animal`, animalData);
  }

  getAnimalById(idAnimal: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/animal/${idAnimal}`);
  }

  updateAnimal(idAnimal: number, animalData: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/animal/${idAnimal}`, animalData);
  }
  //Estados
  GetEstados(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/estados`);
  }

  GetEstadoById(idState: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/estados/${idState}`);
  }
  //Estado de Salud
  GetEstadosSalud(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/estadosalud`);
  }

  // convertImageToBase64(imageUrl: string): Promise<string> {
  //   return this.http.get(imageUrl, { responseType: 'blob' })
  //     .toPromise()
  //     .then((blob: any) => {
  //       return this.blobToBase64(blob);
  //     });
  // }
  // Tipo de animal
  GetTypeAnmalById(idState: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/tipoanimalcontoller/${idState}`);
  }
  GetTypeAnimal(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/tipoanimalcontoller`);
  }

  //Otros Servicios
  //Imagen a B64

  convertImageToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        resolve(reader.result as string);
      };

      reader.onerror = () => {
        reject('Error converting image to base64');
      };

      reader.readAsDataURL(file);
    });
  }
  //Imagen Local

  getImageLocal(): Promise<Blob> {
    return fetch('../../../assets/imagenes/fotodefault.png').then((response) =>
      response.blob(),
    );
  }
}
