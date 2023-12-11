import { Component, Inject } from '@angular/core';
import { Sponsors } from '../../client/interface/index';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Sponsors
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
