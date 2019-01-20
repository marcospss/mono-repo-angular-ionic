import { Component, Input, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as fromRoot from './../../../reducers';
import { Media } from '@platform/core/models';
import { UtilsProvider } from '@platform/core/services';
import * as FavoritesActions from './../../../favorites/actions/favorites.actions';
import { FavoritesService } from './../../services';

@Component({
    selector: 'mps-favorite-media',
    templateUrl: './favorite-media.component.html',
    styleUrls: ['./favorite-media.component.scss']
})
export class FavoriteMediaComponent implements OnDestroy {
    mediaType = 'movie';
    favoriteIds$: Observable<any[]>;
    collectionFavoritesIds = [];
    @Input() item: Media;
    actionsSubscription: Subscription;

    constructor(
        private store: Store<fromRoot.State>,
        public utilsProvider: UtilsProvider
    ) {
        this.favoriteIds$ = store.pipe(select(fromRoot.selectFavoriteIds));
        this.actionsSubscription = this.favoriteIds$
            .subscribe(data => this.collectionFavoritesIds = data);
    }

    ngOnDestroy() {
        this.actionsSubscription.unsubscribe();
      }

    addItem() {
        const mediaType = { mediaType: this.mediaType },
            mediaItem = Object.assign({}, this.item, mediaType);
            this.store.dispatch(new FavoritesActions.AddFavorite(mediaItem));
    }

    removeItem() {
        this.store.dispatch(new FavoritesActions.RemoveFavorite(this.item));
    }

    get isFavorite() {
        return this.item.id && this.collectionFavoritesIds.indexOf(this.item.id) > -1;
      }

}
