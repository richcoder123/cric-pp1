import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-all-time-india-xi',
  templateUrl: './all-time-india-xi.component.html',
  styleUrls: ['./all-time-india-xi.component.scss']
})
export class AllTimeIndiaXiComponent {

  isActivateTeamBuilding = false

  activateTeamBuilding() {
    this.isActivateTeamBuilding = true;
  }


}
