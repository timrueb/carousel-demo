import { Injectable } from '@angular/core';

import { Car } from '../model/Car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars: Car[];
  constructor() {
    this.cars = [
      {
        name: 'Ford S-MAX',
        description: '2.0 EcoBlue 190 ST-Line 5dr Diesel Estate - Ford Direct',
        miles: 7400,
        price: 27000,
        image: 'ford_smax',
        href: 'https://www.bristolstreet.co.uk/',
      },
      {
        name: 'BMW 3 Series',
        description: '320d Luxury 4dr Step Auto [Business Media] Diesel Saloon',
        miles: 28425,
        price: 14490,
        image: 'bmw_3',
        href: 'https://www.bristolstreet.co.uk/',
      },
      {
        name: 'SEAT Leon',
        description: '1.2 TSI 110 SE 5dr [Technology Pack] Petrol Hatchback',
        miles: 100961,
        price: 6971,
        image: 'seat_leon',
        href: 'https://www.bristolstreet.co.uk/',
      },
      {
        name: 'Peugot 108',
        description: '1.0 72 Allure 5dr Petrol Hatchback',
        miles: 100961,
        price: 6971,
        image: 'peugot_108',
        href: 'https://www.bristolstreet.co.uk/',
      },
      {
        name: 'Citroen C3',
        description: '1.2 PureTech Feel 5dr Petrol Hatchback',
        miles: 5613,
        price: 8490,
        image: 'citroen_c3',
        href: 'https://www.bristolstreet.co.uk/',
      },
      {
        name: 'Vauxhall Viva',
        description: '1.0 SE 5dr Petrol Hatchback',
        miles: 29880,
        price: 6500,
        image: 'vauxhall_viva',
        href: 'https://www.bristolstreet.co.uk/',
      },
    ];
  }

  getRecommendedCars(): Car[] {
    return this.cars;
  }

  getLatestUsedCars(): Car[] {
    return this.cars;
  }
}
