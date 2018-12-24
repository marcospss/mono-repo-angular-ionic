import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ItemDetailEffects } from './effects/item-detail.effects';
import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('itemDetail', reducers),
    EffectsModule.forFeature([ItemDetailEffects])
  ],
})
export class ItemDetailModule {}
