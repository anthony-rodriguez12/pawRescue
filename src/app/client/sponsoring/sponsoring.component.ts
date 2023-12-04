import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../services/mascotas.service';
import { AnimalI } from '../interface/client.interfaces';

@Component({
  selector: 'app-sponsoring',
  templateUrl: './sponsoring.component.html',
  styleUrls: ['./sponsoring.component.scss'],
})
export class SponsoringComponent implements OnInit {
  button = 'Apadrinar';

  constructor(private mascotasService: MascotasService) { }

  pets: AnimalI[] = [];

  ngOnInit(): void {    
    this.getMascotas();
  }

  getMascotas(){
    this.mascotasService.getMascotas().subscribe({
      next: (pets) => {
        this.pets = pets;
      }
    });
  }

  loadingImg(loading: number){
    setTimeout(() => {
      this.mascotasService.loadingPet(loading);
    }, 1000);
  }

  errorImg(err: any, pet: AnimalI){
    pet.loadingImg = true;
    err.target.src = '../../../assets/imagenes/placeholders.jpeg';
  }
}
