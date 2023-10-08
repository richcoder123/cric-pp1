import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { WcXiComponent } from './components/wc-xi/wc-xi.component';
import { AllTimeIndiaXiComponent } from './components/all-time-india-xi/all-time-india-xi.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CardComponent } from './components/common/card/card.component';
import { PlayerdetailsService } from './services/playerdetails.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterChipComponent } from './components/common/filter-chip/filter-chip.component';
import { PlayerStatisticsPipe } from './custom-pipes/player-statistics.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    WcXiComponent,
    AllTimeIndiaXiComponent,
    HomeComponent,
    AboutMeComponent,
    CardComponent,
    FilterChipComponent,
    PlayerStatisticsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [PlayerdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
