import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.scss']
})
export class HeaderLoginComponent {
  constructor(private router: Router){}

  openDialogSalir(){ 
    this.redireccionaInicio();
  }

  redireccionaInicio() {
    this.router.navigate(['/']);

  }
}
