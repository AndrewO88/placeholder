import {Injectable} from '@angular/core';
import {Login} from '../config/interface';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  save(model: Login, key: string): void {
    localStorage.setItem(key, JSON.stringify(model));
  }

  load(key: string): any {
    return localStorage.getItem(key);
  }

  delete(key: string): void {
    localStorage.removeItem(key);
  }

  constructor() {
  }
}
