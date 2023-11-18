import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
}
