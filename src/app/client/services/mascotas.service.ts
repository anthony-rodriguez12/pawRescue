import { Injectable } from '@angular/core';
import { Animal, AnimalI } from '../interface/client.interfaces';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  petsService: Animal[] = [
    {
      id: 1,
      img: '../../../assets/imagenes/golden.jpg',
      name: 'Max',
      age: 2,
    },
    {
      id: 2,
      img: '../../../assets/imagenes/perrito-3.jpeg',
      name: 'Luna',
      age: 3,
    },
    {
      id: 3,
      img: '../../../assets/imagenes/perrito-4.jpg',
      name: 'Rocky',
      age: 4,
    },
    {
      id: 4,
      img: '../../../assets/imagenes/perrito-1.jpg',
      name: 'Bella',
      age: 1,
    },
    {
      id: 5,
      img: '../../../assets/imagenes/perrito-2.jpeg',
      name: 'Charlie',
      age: 2,
    },
    {
      id: 6,
      img: '../../../assets/imagenes/cachorro.jpg',
      name: 'Daisy',
      age: 3,
    },
    {
      id: 7,
      img: '../../../assets/imagenes/copito.jpg',
      name: 'Milo',
      age: 4,
    },
    {
      id: 8,
      img: '../../../assets/imagenes/coquito.jpg',
      name: 'Lucy',
      age: 1,
    },
    {
      id: 9,
      img: '../../../assets/imagenes/gato01.jpg',
      name: 'Cooper',
      age: 2,
    },
    {
      id: 10,
      img: '../../../assets/imagenes/gato02.png',
      name: 'Sadie',
      age: 3,
    },
    {
      id: 11,
      img: '../../../assets/imagenes/michifu.jpg',
      name: 'Buddy',
      age: 4,
    },
    {
      id: 12,
      img: '../../../assets/imagenes/pablito.jpg',
      name: 'Molly',
      age: 1,
    },
  ];
  pets: AnimalI[];

  constructor() {
    this.pets = this.petsService.map(pet => {
      return {
        ...pet,
        loadingImg: false,
        errorImg: false,
      }
    })
  }

  getMascotas(): Observable<AnimalI[]>{
    return of(this.pets);
  }

  loadingPet(petId: number){
    this.pets = this.pets.map((x) => {
      if(petId === x.id){
        x.loadingImg = true;
      }
      return x;
    })
  }
}
