import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place('p1', 'Manhattan Mansion', 'In the heart of the New York city.',
    'https://i.pinimg.com/originals/7c/eb/26/7ceb26367b3a258862f8ccff5f61b472.jpg', 149.99),
    new Place('p2', 'Seoul: The Dazzling Capital City', 'The dazzling capital city will impress you with its dizzying mix of modern architecture, party vibes, pop culture, beautiful parks & glittering promenades making it one of the most famous places in South Korea and the best cities to visit in South Korea. Vibrant Seoul is not just a buzzing urban hub but also rich in history and culture. With gorgeous palaces, chic restaurants and stylish boutiques, Seoul is charming all the way. The National Museum and War Memorial take you through the history of the country, while the cool shopping district of Gangnam gives you a taste of the city’s ritzy side on your reasons to visit South Korea.',
    'https://assets.traveltriangle.com/blog/wp-content/uploads/2018/05/seoul.jpg', 299.99),
    new Place('p3', 'beache of El Nido', 'Some of the most notable spots are the Small & Big Lagoons, Pinagbuyutan Island, Snake Island and Papaya Beach. Whatever tour you chose, you’re guaranteed to see some beautiful beach scenery in El Nido.',
    'https://gretastravels.com/wp-content/uploads/2019/07/DSC_0789-2.jpg', 449.99),
    new Place('p4', 'Jiuzhaigou National Park', 'Get a glimpse of this 1375-metre-long beautiful crystal blue lake in China. Tucked away in among the Min Mountains near the Tibetan Plateau, it’s a far cry from the bustling streets of Beijing! Deservedly, UNESCO turned the place into a World Heritage site in 1992.',
    'https://www.opodo.co.uk/blog/wp-content/uploads/sites/12/2016/04/jiuzhaigou-lake.jpg', 129.99),
    new Place('p5', 'Haiku Stairs in Oahu', 'Nothing quite comes closer to the ‘stairway to heaven’ than the Haiku Stairs in Oahu. These majestic stairs had a top secret purpose when they were built in 1942. Constructed by the Haiku Radio Station to transmit radio signals to Navy ships across the Pacific. Today you can walk the 3,922 steps. If you dare?',
    'https://www.opodo.co.uk/blog/wp-content/uploads/sites/12/2016/04/haiku-stairs.jpg', 0.00),
    new Place('p6', 'Ibaraki', 'A beautiful unknown place near Tokyo is hard to come by, but here’s one! Located northeast of Tokyo within the Kanto Plain is this vast hectare of a variety of flowers in every palette. Definitely a place where flower enthusiast can call paradise.',
    'https://www.opodo.co.uk/blog/wp-content/uploads/sites/12/2016/04/hitachi-park.jpg', 99.99),
    new Place('p7', 'Pangong Tso Lake', 'Considered as the most famous lake in India, this lake isn’t exactly a secret place, but it’s still relatively unvisited. Stretching out for about 160 kms, this saltwater lake contains the highest amount of salt water in the world.',
    'https://www.opodo.co.uk/blog/wp-content/uploads/sites/12/2016/04/pangong-tso.jpg', 300.00),
  ];

  get places() {
    return [...this._places];
  }

  getplaceDetails(placeViewId: string) {
    return {
      ...this._places.find(dataId => {
        return dataId.id === placeViewId
      })
    };
  }

  constructor() { }
}
