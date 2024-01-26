import { Component, Inject } from '@angular/core';
import { PetAddComponent } from '../../../component-animal/pages/pet-add/pet-add.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddVoluntariado, VoluntariadoService } from 'src/app/client/services/voluntariado.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-voluntariado-add',
  templateUrl: './voluntariado-add.component.html',
  styleUrls: ['./voluntariado-add.component.scss']
})
export class VoluntariadoAddComponent {
  addVoluntariado!: AddVoluntariado;
  validForm: boolean = true

  constructor(
    private ServiceVoluntariado: VoluntariadoService,
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
      nombre: this.addVoluntariado.nombre,
      apellido: this.addVoluntariado.apellido,
      fechaNac: this.addVoluntariado.fechaNac,
      edad: this.addVoluntariado.edad,
      ocupacion: this.addVoluntariado.ocupacion,
      correo: this.addVoluntariado.correo,
      motivo: this.addVoluntariado.motivo,
      direccion: this.addVoluntariado.direccion,
      ciudad: this.addVoluntariado.ciudad,
    }

    this.ServiceVoluntariado.AddApadrinamiento(data)
      .subscribe((res) => {
        this.CloseModal(res.statusCode);
      });
  }

  getData(event: any) {
    this.addVoluntariado = event
  }

  CloseModal(mensaje?: string) {
    this.dialogRef.close(mensaje);
  }

  getValidForm(event: boolean) {
    this.validForm = !event
  }


}
