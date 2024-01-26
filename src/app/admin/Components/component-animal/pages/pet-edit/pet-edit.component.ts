// pet-edit.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PetService } from 'src/app/client/services/pet.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.scss']
})
export class PetEditComponent implements OnInit {
  animalData!: any;
  editaDataanimal!: any;
  idAnimal!: number
  validForm: boolean = true

  constructor(private route: ActivatedRoute,
    private animalService: PetService,
    private dialogRef: MatDialogRef<PetEditComponent>,
    private _snackBar: SnackbarService,

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
    if (this.validForm) {
      this._snackBar.warning(
        'Aviso',
        'Debe completar todos los campos para continuar.',
      );
      return;
    }
    const formData = new FormData();
    formData.append('Nombre', this.editaDataanimal.Nombre);
    formData.append('SaludDesc', this.editaDataanimal.SaludDesc);
    formData.append('Sexo', this.editaDataanimal.Sexo);
    formData.append('Foto', this.editaDataanimal.Foto);
    formData.append('idTipo', this.editaDataanimal.idTipo);
    formData.append('IdEstado', this.editaDataanimal.IdEstado);
    formData.append('idEstadoSalud', this.editaDataanimal.IdEstadoSalud);

    this.animalService.updateAnimal(this.data, formData).subscribe((res) => {
      this.CloseModal(res.statusCode);
    });

  }
  CloseModal(mensaje?: string) {
    this.dialogRef.close(mensaje);
  }

  getData(event: any) {
    this.editaDataanimal = event
  }
  getValidForm(event: boolean) {
    this.validForm = !event
  }
}
