import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from './../core/core.module';
import { ItemDetailModule } from '@platform/core/state/item-detail/item-detail.module';

import { DetailsRoutingModule } from './details-routing.module';
import { MainComponent } from './containers/main/main.component';
import { PageComponent } from './components/page/page.component';
import { SelectedItemComponent } from './containers/selected-item/selected-item.component';

@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule,
    CoreModule,
    ItemDetailModule
  ],
  declarations: [MainComponent, PageComponent, SelectedItemComponent]
})
export class DetailsModule { }
