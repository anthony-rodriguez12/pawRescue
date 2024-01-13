import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Animal, AnimalI } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class MascotasService {
  petsService: Animal[] = [
    {
      id: 1,
      img: '../../../assets/imagenes/golden.jpg',
      name: 'Max',
      status: true,
      age: 2,
    },
    {
      id: 2,
      img: '../../../assets/imagenes/perrito-3.jpeg',
      name: 'Luna',
      status: true,
      age: 3,
    },
    {
      id: 3,
      img: '../../../assets/imagenes/perrito-4.jpg',
      name: 'Rocky',
      status: true,
      age: 4,
    },
    {
      id: 4,
      img: '../../../assets/imagenes/perrito-1.jpg',
      name: 'Bella',
      status: true,
      age: 1,
    },
    {
      id: 5,
      img: '../../../assets/imagenes/perrito-2.jpeg',
      name: 'Charlie',
      status: true,
      age: 2,
    },
    {
      id: 6,
      img: '../../../assets/imagenes/cachorro.jpg',
      name: 'Daisy',
      status: true,
      age: 3,
    },
    {
      id: 7,
      img: '../../../assets/imagenes/copito.jpg',
      name: 'Milo',
      status: true,
      age: 4,
    },
    {
      id: 8,
      img: '../../../assets/imagenes/coquito.jpg',
      name: 'Lucy',
      status: true,
      age: 1,
    },
    {
      id: 9,
      img: '../../../assets/imagenes/gato01.jpg',
      name: 'Cooper',
      status: true,
      age: 2,
    },
    {
      id: 10,
      img: '../../../assets/imagenes/gato02.png',
      name: 'Sadie',
      status: true,
      age: 3,
    },
    {
      id: 11,
      img: '../../../assets/imagenes/michifu.jpg',
      name: 'Buddy',
      status: true,
      age: 4,
    },
    {
      id: 12,
      img: '../../../assets/imagenes/pablito.jpg',
      name: 'Molly',
      status: false,
      age: 1,
    },
  ];
  pets: AnimalI[];

  constructor() {
    this.pets = this.petsService.map((pet) => {
      return {
        ...pet,
        loadingImg: false,
        errorImg: false,
      };
    });
  }

  getMascotas(): Observable<AnimalI[]> {
    return of(this.pets);
  }

  loadingPet(petId: number) {
    this.pets = this.pets.map((x) => {
      if (petId === x.id) {
        x.loadingImg = true;
      }
      return x;
    });
  }
}
