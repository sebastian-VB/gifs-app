import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];

  constructor() { }

  get tagsHistory(): string[]{
    return [...this._tagsHistory]; //crear una copia del arreglo
  }

  searchTag(tag: string): void{
    this._tagsHistory.unshift(tag);
    console.log(this._tagsHistory);
  }

}
