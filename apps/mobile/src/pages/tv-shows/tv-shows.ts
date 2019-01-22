import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from './../../app/reducers';
import { Discover, Media } from '@platform/core/models';
import { TvShowsActions } from '@platform/core/state/tv-shows';
import * as FavoritesActions from './../../pages/favorites/actions/favorites.actions';

@IonicPage()
@Component({
    selector: 'tv-shows',
    templateUrl: 'tv-shows.html',
})
export class TvShowsPage {
    medias$: Observable<Discover[]>;
    mediaType = 'tv';
    title = 'The Movie Database';

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private store: Store<fromRoot.State>

    ) {
        this.medias$ = store.pipe(select(fromRoot.getTvShowsResult));
    }

    ionViewWillEnter() {
        this.store.dispatch(new FavoritesActions.LoadFavoritesCollection());
    }

    ionViewDidLoad() {
        const filterProperties = {
            mediaType: 'tv',
            sortBy: 'popularity.desc',
            year: '',
            genre: ''
        };
        this.store.dispatch(new TvShowsActions.FilterPropertiesTvShows(filterProperties));
    }

    addItem(item: Media) {
        const mediaType = { mediaType: this.mediaType },
            mediaItem = Object.assign({}, item, mediaType);
        this.store.dispatch(new FavoritesActions.AddFavorite(mediaItem));
    }

    removeItem(item: Media) {
        this.store.dispatch(new FavoritesActions.RemoveFavorite(item));
    }

    moreInfo(item: Media) {
        this.navCtrl.push('ItemDetailPage', {
            item: item,
            mediaType: this.mediaType
        });
    }

}
