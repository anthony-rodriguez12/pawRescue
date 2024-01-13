import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class MomentService {
  getCurrentDate() {
    return moment().utc().format('YYYY-MM-DD HH:mm:ss');
  }

  getDiffWithCurrentDate(expedition: string) {
    return moment(expedition, 'YYYY-MM-DD HH:mm:ss').diff(
      this.getCurrentDate(),
      'hours',
    );
  }
}
