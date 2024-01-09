import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToastDangerComponent } from '../customs/toast-danger.component';
import { ToastSucessComponent } from '../customs/toast-sucess.component';
import { ToastWarningComponent } from '../customs/toast-warning.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private timeOut: number = 4000;
  constructor(private toast: ToastrService) {}

  showSuccess() {
    this.toast.show('sssssss', 'Toastr fun!', {
      toastComponent: ToastSucessComponent,
      progressBar: true,
    });
  }

  sucess(title: string, message: string) {
    this.toast.show(message, title, {
      timeOut: this.timeOut,
      toastComponent: ToastSucessComponent,
      progressBar: true,
    });
  }

  warning(title: string, message: string) {
    this.toast.show(message, title, {
      timeOut: this.timeOut,
      toastComponent: ToastWarningComponent,
      progressBar: true,
    });
  }

  danger(title: string, message: string) {
    this.toast.show(message, title, {
      timeOut: this.timeOut,
      toastComponent: ToastDangerComponent,
      progressBar: true,
    });
  }
}
