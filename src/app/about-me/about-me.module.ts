import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { AuthorComponent } from './author/author.component';
import { GenericModule } from '../generic/generic.module';


@NgModule({
  declarations: [
    AuthorComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    GenericModule
  ]
})
export class AboutMeModule { }
