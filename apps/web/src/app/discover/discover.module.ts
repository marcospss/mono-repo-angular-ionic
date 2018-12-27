import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverRoutingModule } from './discover-routing.module';
import { MainComponent } from './containers/main/main.component';
import { CoreModule } from './../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    DiscoverRoutingModule,
    CoreModule
  ],
  declarations: [MainComponent]
})
export class DiscoverModule { }
