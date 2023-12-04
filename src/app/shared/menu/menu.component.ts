import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';

interface Second {
  label: string;
  icon: string;
  link: string;
}

interface Nav {
  label: string;
  icon: string;
  link: string;
  active: boolean;
  items?: Second[];
  showMenu?: boolean;
  preIcon?: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {}  

  items: Nav[] = [];
  activeLink = 'bg-[#E6DFB7] text-[#250F17]';
  inactiveLink = 'text-[#E6DFB7] focus:bg-[#E6DFB7] hover:bg-[#E6DFB7] focus:text-[#250F17] hover:text-[#250F17]';
  openMenu: boolean = true;
  path: string | undefined = '';
  
  changeMenu() {
    this.openMenu = !this.openMenu;
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        link: './home',
        active: false,
        icon: 'fa-solid fa-house',
      },
      {
        label: 'Adopción',
        link: './adoption',
        active: false,
        icon: 'fa-solid fa-heart-circle-check',
      },
      {
        label: 'Ayudanos a Rescatar',
        icon: 'fa-solid fa-users',
        preIcon: 'fa-solid fa-caret-down',
        link: './help-us',
        active: false,
        items: [
          {
            label: 'Información de Donaciones',
            link: './help-us/donations',
            icon: 'fa-solid fa-circle-dollar-to-slot',
          },
          {
            label: 'Hogar Temporal',
            link: './help-us/temporary-home',
            icon: 'fa-solid fa-house-circle-check',
          },
          {
            label: 'Rescate',
            link: './help-us/rescue',
            icon: 'fa-solid fa-kit-medical',
          },
        ],
        showMenu: false,
      },
      {
        label: 'Programas',
        icon: 'fa-solid fa-clipboard',
        preIcon: 'fa-solid fa-caret-down',
        link: './programs',
        active: false,
        items: [
          {
            label: 'Apadrinamiento',
            link: './programs/sponsors',
            icon: 'fa-solid fa-hand-holding-medical',
          },
          {
            label: 'Voluntariado',
            link: './programs/volunteering',
            icon: 'fa-solid fa-handshake-angle',
          },
        ],
        showMenu: false,
      },
      {
        label: 'Contáctanos',
        icon: 'fa-solid fa-id-card-clip',
        link: './contact-us',
        active: false,
      }
    ];

    this.syncronicMenu(this.router.url);

    this.router.events
    .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      this.syncronicMenu(event.url);
    });
  }

  syncronicMenu(route: string){
    const arr = route.split('/');
    route = arr[2];
    this.items = this.items.map(ruta => {
      const url = ruta.link.split('/');
      if(route.includes(url[1])){
        ruta.active = true;
      } else {
        ruta.active = false;
      }
      return ruta;
    });
  }
  

  showMenu(view: Nav) {
    if(view?.items){
      if(view.showMenu){
        view.showMenu = false;
        view.preIcon = "fa-solid fa-caret-down";
        this.offMenus(view.label, false);
      } else {
        this.offMenus(view.label, true);
        view.showMenu = true;
        view.preIcon = "fa-solid fa-caret-up"
      }
    }
  }

  offMenus(label: string, offOptions: boolean){
    this.items.forEach(option => {
      if(option.label !== label){
        if(offOptions) option.showMenu = false;
        if(option.preIcon) option.preIcon = "fa-solid fa-caret-down";
      }
    });
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

  login() {
    this.router.navigate(['/login']);
  }
}
