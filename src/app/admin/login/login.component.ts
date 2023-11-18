import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z]+$')]],
      password: ['', [Validators.required, Validators.maxLength(30)]]
    })
  }
}
