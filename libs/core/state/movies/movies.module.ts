import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { MoviesEffects } from './effects/movies.effects';
import { reducers } from './reducers';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('movies', reducers),
    EffectsModule.forFeature([MoviesEffects])
  ]
})
export class MoviesModule {}
