import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AnimalI } from 'src/app/shared/interfaces';
import { healthStatusPets } from 'src/app/shared/enums/enums';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.scss'],
})
export class AdoptionComponent implements OnInit {
  button = 'Adoptar';
  pets: AnimalI[] = [];
  healthStatus = 0;
  constructor(private petService: PetService) {
    this.healthStatus = healthStatusPets.Deceased;
  }

  ngOnInit(): void {
    this.getMascotas();
  }

  getMascotas() {
    this.petService.getAnimals().subscribe({
      next: (element) => {
        this.pets = element.data.map((pet) => {
          return {
            ...pet,
            loadingImg: false,
            errorImg: false,
          };
        });
        console.log('Logs', this.pets);
      },
    });
  }

  loadingImg(loadingId: number) {
    setTimeout(() => {
      this.pets = this.pets.map((x) => {
        if (loadingId === x.idAnimal) {
          x.loadingImg = true;
        }
        return x;
      });
    }, 1000);
  }

  errorImg(err: any, pet: AnimalI) {
    pet.loadingImg = true;
    err.target.src = '../../../assets/imagenes/placeholders.jpeg';
  }
}
