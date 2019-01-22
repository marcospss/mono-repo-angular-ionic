import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from './../../app/reducers';
import * as FavoritesActions from './../../pages/favorites/actions/favorites.actions';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

  moviesRoot:string = 'MoviesPage'
  seriesRoot:string = 'TvShowsPage'
  searchRoot:string = 'SearchPage'


  constructor(
      public navCtrl: NavController,
      private store: Store<fromRoot.State>
    ) {}

    ionViewWillEnter() {
        this.store.dispatch(new FavoritesActions.LoadFavoritesCollection());
    }
}
