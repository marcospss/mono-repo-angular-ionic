import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TvShowsModule } from '@platform/core/state/tv-shows/tv-shows.module';

import { ComponentsModule } from './../../components/components.module';
import { TvShowsPage } from './tv-shows';

@NgModule({
  declarations: [
    TvShowsPage
  ],
  imports: [
    IonicPageModule.forChild(TvShowsPage),
    ComponentsModule,
    TvShowsModule
  ]
})
export class TvShowsPageModule {}
