import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SearchEffects } from './effects/search.effects';
import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('search', reducers),
    EffectsModule.forFeature([SearchEffects])
  ],
})
export class SearchModule {}
