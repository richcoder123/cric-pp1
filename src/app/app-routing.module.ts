import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AllTimeIndiaXiComponent } from './components/all-time-india-xi/all-time-india-xi.component';
import { HomeComponent } from './components/home/home.component';
import { WcXiComponent } from './components/wc-xi/wc-xi.component';

const routes: Routes = [{
  component: HomeComponent,
  path: 'home'
}, {
  component: WcXiComponent,
  path: 'wcxi'
}, {
  component: AllTimeIndiaXiComponent,
  path: 'alltimeindiaxi'
}, {
  component: AboutMeComponent,
  path: 'aboutme'
}, {
  redirectTo: 'home',
  path: '',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
