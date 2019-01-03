import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverRoutingModule } from './discover-routing.module';
import { MainComponent } from './containers/main/main.component';
import { CoreModule } from './../core/core.module';
import { MoviesModule } from '@platform/core/state/movies/movies.module';

@NgModule({
  imports: [
    CommonModule,
    DiscoverRoutingModule,
    CoreModule,
    MoviesModule
  ],
  declarations: [MainComponent]
})
export class DiscoverModule { }
