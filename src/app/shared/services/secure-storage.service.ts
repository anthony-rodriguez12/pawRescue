import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SecureStorageService {
  getItem(item: string): any {
    return item;
  }

  setItem(key: string, data: any): void {}

  removeItem(item: string) {}
}
