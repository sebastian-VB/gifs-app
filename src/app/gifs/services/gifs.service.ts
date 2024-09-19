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

    if(tag.length === 0) return;

    this.organizeHistory(tag);

    console.log(this._tagsHistory);
  }

  private organizeHistory(tag: string): void{

    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);

  }

}
