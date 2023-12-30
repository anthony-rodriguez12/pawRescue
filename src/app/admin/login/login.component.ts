import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/client/services/login.service';
import { CustomSnackbarComponent } from 'src/app/shared/custom-snackbar/custom-snackbar.component';
import { SnackbarService } from '../../shared/services/snackbar.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private _snackBar: SnackbarService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z]+$'),
        ],
      ],
      password: ['', [Validators.required, Validators.maxLength(30)]],
    });
  }

  onSubmit() {
    console.log('loginForm:', this.loginForm.valid);
    if (this.loginForm.valid) {
      this.loginService.login(
        this.loginForm.get('username')?.value,
        this.loginForm.get('password')?.value
      );
    } else {
      this._snackBar.warning('Aviso', 'Por favor completa el formulario')
    }
  }
}
