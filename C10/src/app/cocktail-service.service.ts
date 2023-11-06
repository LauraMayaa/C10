import { Injectable } from '@angular/core';
import { Cocktails } from './models/cocktails.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  cocktails: Cocktails[] = [
    {
      name: 'martini',
      price: 10,
      img: 'https://www.liquor.com/thmb/sUKZSwJj7slc5l-LDyK8eajT0LY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/very-sexy-martini-720x720-primary-b1212ebf73f54f898a56f7f0b60c0a34.jpg'
    },
    {
      name: 'pina colada',
      price: 10,
      img: 'https://www.kerryfoodservice.com/cdn/shop/products/swzjjrcehfuoah8kn4hz_1000x.jpg?v=1615853893'
    },
    {
      name: 'mojito',
      price: 10,
      img: 'https://leitesculinaria.com/wp-content/uploads/2021/06/mexican-mojito.jpg'
    }
  ]

  constructor() { }
}
