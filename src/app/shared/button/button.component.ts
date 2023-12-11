import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'element-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent{
    @Input() Label: string = 'Button';
    @Input() Disabled: boolean = false;
    @Output() Click = new EventEmitter<void>();

    onClick() {
      this.Click.emit();
    }
}
