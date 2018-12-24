import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './containers/main/main.component';

import { CoreModule } from './../core/core.module';
import { MoviesModule } from '@platform/core/state/movies/movies.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MoviesModule,
    CoreModule
  ],
  declarations: [MainComponent]
})
export class HomeModule { }
