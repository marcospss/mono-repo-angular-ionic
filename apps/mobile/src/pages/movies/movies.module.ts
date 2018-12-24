import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { MoviesModule } from '@platform/core/state/movies/movies.module';

import { ComponentsModule } from './../../components/components.module';
import { MoviesPage } from './movies';

@NgModule({
  declarations: [
    MoviesPage
  ],
  imports: [
    IonicPageModule.forChild(MoviesPage),
    ComponentsModule,
    MoviesModule
  ]
})
export class MoviesPageModule {}
