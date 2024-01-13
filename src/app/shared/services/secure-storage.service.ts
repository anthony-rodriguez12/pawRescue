import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SecureStorageService {
  constructor(private localStorageService: LocalStorageService) {}

  getItem<T>(key: string) {
    return this.localStorageService.get<T>(key);
  }

  setItem<T>(key: string, data: any): void {
    this.localStorageService.set<T>(key, data);
  }

  removeItem(key: string) {
    this.localStorageService.remove(key);
  }
}
