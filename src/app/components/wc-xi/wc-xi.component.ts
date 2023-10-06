import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerdetailsService } from 'src/app/services/playerdetails.service';

@Component({
  selector: 'app-wc-xi',
  templateUrl: './wc-xi.component.html',
  styleUrls: ['./wc-xi.component.scss']
})
export class WcXiComponent {

  dataSet: any

  constructor(private playerDetails: PlayerdetailsService) {

  }

  ngOnInit() {
    this.playerDetails.getIndiaWcTeam().subscribe((data: any) => {
      this.dataSet = JSON.parse(data.body)
    })
  }
}
