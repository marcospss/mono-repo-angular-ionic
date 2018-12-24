import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TvShowsEffects } from './effects/tv-shows.effects';
import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('tvShows', reducers),
    EffectsModule.forFeature([TvShowsEffects])
  ],
})
export class TvShowsModule {}
