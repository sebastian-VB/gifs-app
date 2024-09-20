import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  firstValue: string = "";

  constructor(private gifsService: GifsService){
    // if (!localStorage.getItem('history')) return;
    // this.gifsService.searchTag(JSON.parse(localStorage.getItem('history')!)[0])
  }

  get gifs(): Gif[]{
    return this.gifsService.gifList;
  }

}
