import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { MainComponent } from './containers/main/main.component';

@NgModule({
  imports: [
    CommonModule,
    FavoritesRoutingModule
  ],
  declarations: [MainComponent]
})
export class FavoritesModule { }
