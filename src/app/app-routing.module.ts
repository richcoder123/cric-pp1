import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  redirectTo: 'home',
  path: '',
  pathMatch: 'full'
}, {
  path: 'about-me',
  loadChildren: () => {
    return import('./about-me/about-me.module').then(mod => mod.AboutMeModule)
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
