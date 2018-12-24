import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from './../core/core.module';
import { ItemDetailModule } from '@platform/core/state/item-detail/item-detail.module';

import { DetailsRoutingModule } from './details-routing.module';
import { MainComponent } from './containers/main/main.component';
import { PageComponent } from './components/page/page.component';

@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule,
    CoreModule,
    ItemDetailModule
  ],
  declarations: [MainComponent, PageComponent]
})
export class DetailsModule { }
