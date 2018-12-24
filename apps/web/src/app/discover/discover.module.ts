import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverRoutingModule } from './discover-routing.module';
import { MainComponent } from './containers/main/main.component';

@NgModule({
  imports: [
    CommonModule,
    DiscoverRoutingModule
  ],
  declarations: [MainComponent]
})
export class DiscoverModule { }
