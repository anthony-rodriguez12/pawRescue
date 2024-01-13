import { Component } from '@angular/core';
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { snackBar as config } from './theme.config';
import { Toast } from 'ngx-toastr';
import { SnackBarDesign, SnackBarType } from '../interfaces';

@Component({
  selector: 'custom-danger-toast',
  styleUrls: ['./customs-toasts.component.scss'],
  templateUrl: './toasts-customs.component.html',
  animations: [
    trigger('flyInOut', [
      state(
        'inactive',
        style({
          opacity: 0,
        }),
      ),
      transition(
        'inactive => active',
        animate(
          '400ms ease-out',
          keyframes([
            style({
              transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
              opacity: 0,
            }),
            style({
              transform: 'skewX(20deg)',
              opacity: 1,
            }),
            style({
              transform: 'skewX(-5deg)',
              opacity: 1,
            }),
            style({
              transform: 'none',
              opacity: 1,
            }),
          ]),
        ),
      ),
      transition(
        'active => removed',
        animate(
          '400ms ease-out',
          keyframes([
            style({
              opacity: 1,
            }),
            style({
              transform: 'translate3d(100%, 0, 0) skewX(30deg)',
              opacity: 0,
            }),
          ]),
        ),
      ),
    ]),
  ],
  preserveWhitespaces: false,
})
export class ToastDangerComponent extends Toast {
  type: SnackBarType = 'danger';

  snackBar: Record<SnackBarType, SnackBarDesign> = config;

  undoString = 'undo';
  action(event: Event) {
    event.stopPropagation();
    this.undoString = 'undid';
    this.toastPackage.triggerAction();
    return false;
  }
}
