import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Nav } from '../interfaces';
import { RoutesNav } from '../utils/routes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {}

  items: Nav[] = [];
  activeLink = 'bg-[#E6DFB7] text-[#250F17]';
  inactiveLink =
    'text-[#E6DFB7] focus:bg-[#E6DFB7] hover:bg-[#E6DFB7] focus:text-[#250F17] hover:text-[#250F17]';
  openMenu: boolean = true;
  path: string | undefined = '';

  changeMenu() {
    this.openMenu = !this.openMenu;
  }

  ngOnInit() {
    this.items = RoutesNav;

    this.syncronicMenu(this.router.url);

    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
      )
      .subscribe((event: NavigationEnd) => {
        this.syncronicMenu(event.url);
      });
  }

  syncronicMenu(route: string) {
    const arr = route.split('/');
    route = arr[2];
    this.items = this.items.map((ruta) => {
      const url = ruta.link.split('/');
      if (route.includes(url[1])) {
        ruta.active = true;
      } else {
        ruta.active = false;
      }
      return ruta;
    });
  }

  showMenu(view: Nav) {
    if (view?.items) {
      if (view.showMenu) {
        view.showMenu = false;
        view.preIcon = 'fa-solid fa-caret-down';
        this.offMenus(view.label, false);
      } else {
        this.offMenus(view.label, true);
        view.showMenu = true;
        view.preIcon = 'fa-solid fa-caret-up';
      }
    }
  }

  offMenus(label: string, offOptions: boolean) {
    this.items.forEach((option) => {
      if (option.label !== label) {
        if (offOptions) option.showMenu = false;
        if (option.preIcon) option.preIcon = 'fa-solid fa-caret-down';
      }
    });
  }

  login() {
    this.router.navigate(['/login']);
  }
}
