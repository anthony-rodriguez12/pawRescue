import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PetService } from 'src/app/client/services/pet.service';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.scss']
})
export class PetAddComponent {
  addDataanimal!: any;
  constructor(private animalService: PetService,
    private dialogRef: MatDialogRef<PetAddComponent>,
  ) {

  }

  saveAnimal() {
    const formData = new FormData();
    formData.append('Nombre', this.addDataanimal.Nombre);
    formData.append('SaludDesc', this.addDataanimal.SaludDesc);
    formData.append('Sexo', this.addDataanimal.Sexo);
    formData.append('Foto', this.addDataanimal.Foto);
    formData.append('idTipo', this.addDataanimal.idTipo);
    formData.append('idEstadoSalud', this.addDataanimal.IdEstadoSalud);

    this.animalService.AddAnimal(formData).subscribe((res) => {
      console.log(res);      
      if (res) {
        this.CloseModal(res.statusCode);
      } else {
        this.CloseModal(res.statusCode);
      }
    });
  }

  getData(event: any) {
    console.log("event",event);    
    this.addDataanimal = event
  }

  CloseModal(mensaje?: string) {
    this.dialogRef.close(mensaje);
  }

}
