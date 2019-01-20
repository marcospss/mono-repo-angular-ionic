import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { MainComponent } from './containers/main/main.component';
import { FavoritesEffects } from './effects/favorites.effects';
import { reducers } from './reducers';
@NgModule({
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    StoreModule.forFeature('favorites', reducers),
    EffectsModule.forFeature([FavoritesEffects])
  ],
  declarations: [
      MainComponent
    ]
})
export class FavoritesModule { }
