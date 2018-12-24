import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ItemDetailModule } from '@platform/core/state/item-detail/item-detail.module';

import { ItemDetailPage } from './item-detail';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    ItemDetailPage
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailPage),
    ComponentsModule,
    ItemDetailModule
  ],
})
export class ItemDetailPageModule {}
