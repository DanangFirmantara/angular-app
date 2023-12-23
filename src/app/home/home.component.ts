import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  dataHousingLocationList: HousingLocation[] = []
  housingService: HousingService = inject(HousingService)
  filteredLocationList: HousingLocation[] = []

  applyForm = new FormGroup({
    dataFilter: new FormControl('')
  })

  constructor() {
    this.housingService.getAllHousingLocation().then(((dataHousingLocationList: HousingLocation[]) => {
      this.dataHousingLocationList = dataHousingLocationList
      this.filteredLocationList = dataHousingLocationList
    }))
  }

  filterResults() {
    if(!this.applyForm.value.dataFilter){
      return this.filteredLocationList = this.dataHousingLocationList
    }
    
    const textFilter = this.applyForm.value.dataFilter;
    return this.filteredLocationList = this.dataHousingLocationList.filter(
      dataItem => dataItem?.city.toLowerCase().includes(textFilter.toLowerCase())
    )
  }

}
