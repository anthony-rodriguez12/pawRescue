import { Component } from '@angular/core';
import { PetAddComponent } from '../../../component-animal/pages/pet-add/pet-add.component';
import { PetService } from 'src/app/client/services/pet.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AdopcionesService } from 'src/app/client/services/adopciones.service';

@Component({
  selector: 'app-adopcion-add',
  templateUrl: './adopcion-add.component.html',
  styleUrls: ['./adopcion-add.component.scss']
})
export class AdopcionAddComponent {
  addDataAdopcion!: any;
  constructor(private animalService: PetService,
    private ServiceAdopcion: AdopcionesService,
    private dialogRef: MatDialogRef<PetAddComponent>,
  ) {

  }

  saveAnimal() {
    const data = {
      nombre: this.addDataAdopcion.nombre,
      apellido: this.addDataAdopcion.apellido,
      direccion: this.addDataAdopcion.direccion,
      fechaNac: this.addDataAdopcion.fechaNac,
      telefono: this.addDataAdopcion.telefono,
      correo: this.addDataAdopcion.correo,
      idEstudios: this.addDataAdopcion.idEstudios,
      motivo: this.addDataAdopcion.motivo,
      idAnimal: this.addDataAdopcion.idAnimal,
    }

    this.ServiceAdopcion.AddAdopcion(data).subscribe((res) => {
      console.log(res);
      if (res) {
        this.CloseModal(res.statusCode);
      } else {
        this.CloseModal(res.statusCode);
      }
    });
  }

  getData(event: any) {
    console.log("event", event);
    this.addDataAdopcion = event
  }

  CloseModal(mensaje?: string) {
    this.dialogRef.close(mensaje);
  }

}
