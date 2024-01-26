import { Component, Inject } from '@angular/core';
import { PetAddComponent } from '../../../component-animal/pages/pet-add/pet-add.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdopcionesService } from 'src/app/client/services/adopciones.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-adopcion-add',
  templateUrl: './adopcion-add.component.html',
  styleUrls: ['./adopcion-add.component.scss']
})
export class AdopcionAddComponent {
  addDataAdopcion!: any;
  validForm: boolean = true

  constructor(
    private ServiceAdopcion: AdopcionesService,
    private dialogRef: MatDialogRef<PetAddComponent>,
    private _snackBar: SnackbarService,

    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

  }

  saveAnimal() {
    if (this.validForm) {
      this._snackBar.warning(
        'Aviso',
        'Debe completar todos los campos para continuar.',
      );
      return;
    }


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

      this.CloseModal(res.statusCode);

    });
  }

  getData(event: any) {
    this.addDataAdopcion = event
  }

  CloseModal(mensaje?: string) {
    this.dialogRef.close(mensaje);
  }

  getValidForm(event: boolean) {
    this.validForm = !event
  }


}
