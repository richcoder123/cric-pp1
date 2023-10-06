//@ts-nocheck

import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerdetailsService } from 'src/app/services/playerdetails.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {

  @Input() cardData;

  constructor() {}

}
