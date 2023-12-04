import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface Path {
  [key: string]: Route;
}
interface Route {
  label: string,
  link: string
}
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  path: Path = {}
  routes:any[] = []
  constructor(private router: Router){}

  ngOnInit(): void {
    this.path = {
      'pawstorescue': {
        label: 'Inicio',
        link: '/home'
      },
      'contact-us': {
        label: 'Contáctanos',
        link: '/contact-us'
      },
    }
    
    this.routes = this.router.url.split('/').filter( x => x!== '');
  }
}
