import { Component, OnInit } from '@angular/core';
import { CocktailServiceService } from './cocktail-service.service';
import { Cocktails } from './models/cocktails.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cocktails: Cocktails[] | undefined
  constructor(public cocktailService: CocktailServiceService) { }

  ngOnInit(): void {
    this.cocktails = this.cocktailService.getCocktails();

  }


}
