import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SearchModule } from '@platform/core/state/search/search.module';
import { ComponentsModule } from './../../components/components.module';
import { SearchPage } from './search';

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPage),
    ComponentsModule,
    SearchModule
  ],
})
export class SearchPageModule {}
