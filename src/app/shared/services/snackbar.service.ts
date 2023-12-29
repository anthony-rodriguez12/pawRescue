import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from '../custom-snackbar/custom-snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(
    private _snackBar: MatSnackBar,
  ) {}

  sucess(title: string, message: string) {
    this._snackBar.openFromComponent(CustomSnackbarComponent, {
      //duration: 4000,
      panelClass: ['custom-snackbar'],
      data: { title, message, type: 'sucess' },
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  warning(title: string, message: string) {
    this._snackBar.openFromComponent(CustomSnackbarComponent, {
      duration: 4000,
      panelClass: ['custom-snackbar'],
      data: { title, message, type: 'warning' },
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  danger(title: string, message: string) {
    this._snackBar.openFromComponent(CustomSnackbarComponent, {
      duration: 4000,
      panelClass: ['custom-snackbar'],
      data: { title, message, type: 'danger', close:this.dismissSnackbar },
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  dismissSnackbar = ():void => {
  }
}
