
// tslint:disable

import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

interface Player {
  "Position": string;
  "Name": string;
  "Country": string;
  "Type": string;
  "Reason": string;
} 

@Component({
  selector: 'app-all-time-india-xi',
  templateUrl: './all-time-india-xi.component.html',
  styleUrls: ['./all-time-india-xi.component.scss']
})
export class AllTimeIndiaXiComponent {

  isActivateTeamBuilding = false

  refreshData = false

  playerTableHeaders = ["Position","Name", "Country", "Type", "Reason"]

  playerDetails: Player[] = [{
    "Position": "1",
    "Name": 'sachin',
    "Country": 'India',
    "Type": 'Batsman',
    "Reason": 'God of cricket'
  }, {
    "Position": "2",
    "Name": 'Sehwag',
    "Country": 'India',
    "Type": 'Batsman',
    "Reason": 'If he clicks, then he will take game away from opposition'
  }, {
    "Position": "2",
    "Name": 'Rohit Sharma',
    "Country": 'India',
    "Type": 'Batsman',
    "Reason": 'If he clicks, then he will take game away from opposition'
  }, {
    "Position": "3",
    "Name": 'Kohli',
    "Country": 'India',
    "Type": 'Batsman',
    "Reason": 'King Kohli'
  }, {
    "Position": "4",
    "Name": 'Yuvraj',
    "Country": 'India',
    "Type": 'spin all rounder',
    "Reason": 'Left hand batsman in the middle, and spin bowler - a must have all rounder in the team'
  }, {
    "Position": "5",
    "Name": 'KL Rahul',
    "Country": 'India',
    "Type": 'Wicket keeper batsman',
    "Reason": 'A class batsman and a spare wicket keeper'
  }, {
    "Position": "6",
    "Name": 'MS Dhoni',
    "Country": 'India',
    "Type": 'Wicket keeper Batsman',
    "Reason": 'An excellent wicket keeper batsman, finisher.'
  }, {
    "Position": "7",
    "Name": 'Hardik Pandya',
    "Country": 'India',
    "Type": 'all rounder',
    "Reason": 'can score quick runs and a fast bowler'
  }, {
    "Position": "8",
    "Name": 'Ravindra Jadeja',
    "Country": 'India',
    "Type": 'all rounder',
    "Reason": 'Left hand batsman, good bowler and a great fielder'
  }, {
    "Position": "9",
    "Name": 'Ashwin',
    "Country": 'India',
    "Type": 'spinner',
    "Reason": 'Mastermind effective on slow pitches'
  }, {
    "Position": "10",
    "Name": 'Bumrah',
    "Country": 'India',
    "Type": 'fast bowler',
    "Reason": 'variations, yorker, unconventional'
  }, {
    "Position": "11",
    "Name": 'Zaheer Khan',
    "Country": 'India',
    "Type": 'fast bowler',
    "Reason": 'left arm bowler'
  }]

  _playerDetails: Player[] = []

  ngOnInit() {
    this._playerDetails = JSON.parse(JSON.stringify(this.playerDetails))
  }

  activateTeamBuilding() {
    this.isActivateTeamBuilding = true;
  }

  getData(rowData: any, column: any) {
    return rowData[column]
  }

  filterData($event: any, header: any) {
    console.log($event.target.value, header)

    this._playerDetails = this.playerDetails.filter((player: any) => {
      return (player[header]).toLowerCase().includes($event.target.value)
    })

  }


}
