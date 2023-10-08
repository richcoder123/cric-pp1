import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-chip',
  templateUrl: './filter-chip.component.html',
  styleUrls: ['./filter-chip.component.scss']
})
export class FilterChipComponent {

  @Input() chipList: string[] = []
  @Output() onChipClicked = new EventEmitter()

  onChipClickedEvent($event: any) {
    this.onChipClicked.emit($event)
  }

}
