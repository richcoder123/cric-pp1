import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  navigationItems = ['Home', 'World Cup 2023 XI', 'All Time India XI', 'All Time World XI', 'About Me']

}
