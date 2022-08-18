import { Injectable } from '@angular/core';
import { IFavourite } from '../models/favourite.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  addToStorage<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getFromStorage(key: string) {
    return JSON.parse(localStorage.getItem(key)!);
  }

  removeFromStorage(key: string): void {
    localStorage.removeItem(key);
  }
}
