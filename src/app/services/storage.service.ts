import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService 
{

  constructor() {}

  public get(name: string): string | null {
    return localStorage.getItem(name);
  }

  public set(name: string, value: string): boolean {
    localStorage.setItem(name, value);
    return true;
  }

  public delete(name: string): void {
    localStorage.removeItem(name);
  }


}
