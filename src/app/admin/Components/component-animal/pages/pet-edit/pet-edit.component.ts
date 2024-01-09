// pet-edit.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from 'src/app/client/services/pet.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.scss']
})
export class PetEditComponent implements OnInit {
  animalData!: any;
  editaDataanimal!: any;
  idAnimal!: number

  constructor(private route: ActivatedRoute,
    private animalService: PetService,
    private dialogRef: MatDialogRef<PetEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.getAnimal(this.data);

  }

  getAnimal(idAnimal: number) {
    this.animalService.getAnimalById(idAnimal).subscribe((res) => {      
      this.animalData = res.data;
    });
  }

  saveAnimal() {
    const formData = new FormData();  
    console.log("adsa",this.editaDataanimal);
     
    formData.append('Nombre', this.editaDataanimal.Nombre);
    formData.append('SaludDesc', this.editaDataanimal.SaludDesc);
    formData.append('Sexo', this.editaDataanimal.Sexo);
    formData.append('Foto', this.editaDataanimal.Foto);
    formData.append('idTipo', this.editaDataanimal.idTipo);
    formData.append('IdEstado', this.editaDataanimal.IdEstado);
    formData.append('idEstadoSalud', this.editaDataanimal.IdEstadoSalud);
    
    this.animalService.updateAnimal(this.data, formData).subscribe((res) => {
      if (res) {
        this.CloseModal(res.statusCode);
      } else {
        this.CloseModal(res.statusCode);
      }
    });

  }
  CloseModal(mensaje?: string) {
    this.dialogRef.close(mensaje);
  }

  getData(event: any) {
    console.log("event",event);
    
    this.editaDataanimal = event
  }
}
