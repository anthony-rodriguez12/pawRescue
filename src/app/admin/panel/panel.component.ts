import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nav } from 'src/app/shared/interfaces';
import { Session } from 'src/app/shared/interfaces/session.interface';
import { LoginService } from 'src/app/shared/services/login.service';
import { SecureStorageService } from 'src/app/shared/services/secure-storage.service';
import { RoutesNav } from 'src/app/shared/utils/routes';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  user = {
    imagen:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    name: 'Admin',
  };
  themeDark: boolean = false;
  statusSideNav: boolean = true;
  routesNav: Nav[] = [];
  activeLink = '';
  inactiveLink = '';

  constructor(
    private router: Router,
    private loginService: LoginService,
    private storageService: SecureStorageService,
  ) {}

  ngOnInit(): void {
    this.user.name = this.storageService.getItem<Session>('session')?.username!;
    this.routesNav = RoutesNav;
  }

  openNav() {
    this.statusSideNav = !this.statusSideNav;
  }

  loggout() {
    this.loginService.loggout();
  }
}
