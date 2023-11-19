import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.scss']
})
export class HeaderLoginComponent implements OnInit {
  constructor(private router: Router){}
  mode: boolean = false;
  ngOnInit(): void {
    this.mode = this.router.url.includes('admin');
  }

  openDialogSalir(){ 
    this.redireccionaInicio();
  }

  redireccionaInicio() {
    this.router.navigate(['/']);

  }
}
