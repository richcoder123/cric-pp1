import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerdetailsService } from 'src/app/services/playerdetails.service';

@Component({
  selector: 'app-wc-xi',
  templateUrl: './wc-xi.component.html',
  styleUrls: ['./wc-xi.component.scss']
})
export class WcXiComponent {

  dataSet: any;
  dataSetOrg: any;
  chipList = ['batsman', 'all-rounder', 'bowler']
  isFilteredDataSet = false

  constructor(private playerDetails: PlayerdetailsService) {

  }

  ngOnInit() {
    if (!this.dataSet) {
      this.playerDetails.getIndiaWcTeam().subscribe((data: any) => {
        this.dataSet = JSON.parse(data.body)
        this.dataSetOrg = JSON.parse(data.body)
      })
    }
  }

  onChipClicked($event: any) {
    if (this.isFilteredDataSet === true) {
      this.dataSet = JSON.parse(JSON.stringify(this.dataSetOrg))
    }
    console.log('filter dataset', $event)
    this.dataSet = this.dataSet.filter((item: any) => {
        if ((item.type) === $event?.srcElement?.innerHTML) {
          return item
        }
    })
    this.isFilteredDataSet = true
    console.log(this.dataSet)
  }

}
