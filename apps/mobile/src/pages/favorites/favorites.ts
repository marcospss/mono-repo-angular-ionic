import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from './../../app/reducers';
import * as FavoritesActions from './actions/favorites.actions';
import { Media } from '@platform/core/models';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesPage {
  medias$: Observable<Media[]>;
  title = 'The Movie Database';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private store: Store<fromRoot.State>
    ) {
      this.medias$ = store.pipe(select(fromRoot.selectAllFavorites));
  }

  ionViewWillEnter() {
    this.store.dispatch(new FavoritesActions.LoadFavoritesCollection());
  }

  removeItem(item: Media) {
    this.store.dispatch(new FavoritesActions.RemoveFavorite(item));
  }

  moreInfo(item: Media) {
    this.navCtrl.push('ItemDetailPage', {
      item: item,
      mediaType: item.mediaType
    });
  }

}
