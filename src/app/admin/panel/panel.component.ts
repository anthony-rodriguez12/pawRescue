import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';

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

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {}

  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      this.setDark();
    } else {
      this.themeDark = false;
      this.setLight();
    }
    this.user.name = sessionStorage.getItem('username')!;
    console.log('first', sessionStorage.getItem('username'));
  }

  setDark() {
    this.themeDark = !this.themeDark;
    if (this.themeDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      this.setLight();
    }
  }

  setLight() {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }

  openNav() {
    this.statusSideNav = !this.statusSideNav;
  }

  loggout() {
    this.loginService.loggout();
  }
}
