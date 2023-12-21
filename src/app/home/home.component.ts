import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa'

  dataHousingLocationList: HousingLocation[] = [
    {
      id : 0,
      name : 'Pondok Indah House',
      city : 'South Jakarta',
      state: 'Jakarta',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: true
    },
    {
      id : 1,
      name : 'Pondok Indah House',
      city : 'South Jakarta',
      state: 'Jakarta',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: true
    },
    {
      id : 2,
      name : 'Pondok Indah House',
      city : 'South Jakarta',
      state: 'Jakarta',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: true
    },
    {
      id : 3,
      name : 'Pondok Indah House',
      city : 'South Jakarta',
      state: 'Jakarta',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: true
    },
    {
      id : 4,
      name : 'Pondok Indah House',
      city : 'South Jakarta',
      state: 'Jakarta',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: true
    },
  ]

}
