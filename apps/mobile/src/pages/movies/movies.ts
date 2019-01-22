import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from './../../app/reducers';
import { Discover, Media } from '@platform/core/models';
import { fromMovies, DiscoverActions } from '@platform/core/state/movies';
import * as FavoritesActions from './../../pages/favorites/actions/favorites.actions';

@IonicPage()
@Component({
    selector: 'page-movies',
    templateUrl: 'movies.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesPage {
    medias$: Observable<Discover[]>;
    isFavorite$: Observable<boolean>;
    mediaType = 'movie';
    title = 'The Movie Database';
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private store: Store<fromRoot.State>,
        private storeMovies: Store<fromMovies.MoviesStates>
    ) {
        this.medias$ = storeMovies.pipe(select(fromMovies.getMoviesPopularResult));
    }

    ionViewWillEnter() {
        this.store.dispatch(new FavoritesActions.LoadFavoritesCollection());
    }

    ionViewDidLoad() {
        const filterProperties = {
            mediaType: 'movie',
            sortBy: 'popularity.desc',
            year: '',
            genre: ''
        };
        this.store.dispatch(new DiscoverActions.FilterPropertiesMovie(filterProperties));
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
