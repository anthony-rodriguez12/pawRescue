import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  constructor(private router: Router) {
  }

  //items: MenuItem[] | undefined;

  ngOnInit() {
      /*this.items = [
          {
              label: 'Inicio',
              icon: 'pi pi-home',
            
          },
          {
              label: 'Adopción',
              icon: 'pi pi-heart ',             
          },
          {
              label: 'Ayudanos a Rescatar',
              icon: 'pi pi-fw pi-user',
              items: [
                  {
                      label: 'Información de Donaciones',
                      icon: 'pi pi-fw pi-user-plus'
                  },
                  {
                      label: 'Hogar Temporal',
                      icon: 'pi pi-fw pi-user-minus'
                  },
                  {
                      label: 'Rescate',
                      icon: 'pi pi-fw pi-users',                    
                  }
              ]
          },
          { 
              label: 'Programas',
              icon: 'pi pi-fw pi-calendar',
              items: [
                  {
                      label: 'Apadrinamiento',
                      icon: 'pi pi-fw pi-pencil',                    
                  },
                  {
                      label: 'Voluntariado',
                      icon: 'pi pi-fw pi-calendar-times',                 
                  }
              ]
          },
        
      ];*/
  }


  redireccionaMascotas() {
    this.router.navigate(['/mascotas']);
  }

  redireccionaInicio() {
    this.router.navigate(['/']);

  }

  redireccionaUsuario() {
    this.router.navigate(['/usuario']);
  }
  redireccionaApadrinamiento() {
    this.router.navigate(['/gestion-apadrinamiento']);
  }

  redireccionaVoluntariado() {
    this.router.navigate(['/forms_voluntarios']);
  }

  login(){
    this.router.navigate(['/login']);
  }


}
