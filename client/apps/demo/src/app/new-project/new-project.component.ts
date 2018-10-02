import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'demo-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  buyerForm = new FormGroup({});
  vendorForm = new FormGroup({});

  buildingTypes: string[] = ['Apartement', 'Maison', 'Terrain'];
  cityLocations: string[] = ['Bruxelles', 'Wallonie'];

  selectedCityLocation = '';
  selectedBuildingType = '';

  constructor() {
  }

  ngOnInit() {
  }

  submit() {
    if (this.buyerForm.valid && this.vendorForm.valid) {
      console.log(this.buyerForm, this.vendorForm)
    }
  }
}
