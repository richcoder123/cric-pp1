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

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    WcXiComponent,
    AllTimeIndiaXiComponent,
    HomeComponent,
    AboutMeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PlayerdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
