import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      control1: new FormControl(),
      control2: new FormControl()
    });
  }
  themeDark: boolean = true;
  darkMode: boolean = false;
  setDark() {
    this.themeDark = !this.themeDark;
    

    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  statusSideNav: boolean = true;
  openNav() {
    this.statusSideNav = !this.statusSideNav;
  }
}
