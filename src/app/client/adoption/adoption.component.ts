import { Component, OnInit } from '@angular/core';
import { AnimalI } from '../interface/client.interfaces';
import { MascotasService } from '../services/mascotas.service';


@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.scss']
})
export class AdoptionComponent implements OnInit{
  button = 'Adoptar';
  pets: AnimalI[] = []
  constructor(private mascotasService: MascotasService){ }
  
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
