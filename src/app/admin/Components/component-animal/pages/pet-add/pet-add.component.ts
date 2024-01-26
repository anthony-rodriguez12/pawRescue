import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PetService } from 'src/app/client/services/pet.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.scss']
})
export class PetAddComponent {
  addDataanimal!: any;
  validForm: boolean = true
  constructor(private animalService: PetService,
    private dialogRef: MatDialogRef<PetAddComponent>,
    private _snackBar: SnackbarService,

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
    const formData = new FormData();
    formData.append('Nombre', this.addDataanimal.Nombre);
    formData.append('SaludDesc', this.addDataanimal.SaludDesc);
    formData.append('Sexo', this.addDataanimal.Sexo);
    formData.append('Foto', this.addDataanimal.Foto);
    formData.append('idTipo', this.addDataanimal.idTipo);
    formData.append('idEstadoSalud', this.addDataanimal.IdEstadoSalud);

    this.animalService.AddAnimal(formData)
      .subscribe((res) => {
        this.CloseModal(res.statusCode);
      });
  }

  getData(event: any) {
    this.addDataanimal = event
  }

  CloseModal(mensaje?: string) {
    this.dialogRef.close(mensaje);
  }


  getValidForm(event: boolean) {
    this.validForm = !event
  }

}
