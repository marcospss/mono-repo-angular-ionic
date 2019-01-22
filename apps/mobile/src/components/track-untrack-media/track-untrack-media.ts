import { Component, Input, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as fromRoot from './../../app/reducers';
import { Media } from '@platform/core/models';
import { UtilsProvider } from '@platform/core/services';
import * as FavoritesActions from './../../pages/favorites/actions/favorites.actions';
@Component({
    selector: 'track-untrack-media',
    templateUrl: 'track-untrack-media.html'
})
export class TrackUntrackMediaComponent implements OnDestroy {
    @Input() item: Media;
    @Input() mediaType: string;
    favoriteIds$: Observable<string[] | number[]>;
    collectionFavoritesIds = [];
    actionsSubscription: Subscription;
    constructor(
        private store: Store<fromRoot.State>,
        public utilsProvider: UtilsProvider
    ) {
        this.favoriteIds$ = store.pipe(select(fromRoot.selectFavoriteIds));
        this.actionsSubscription = this.favoriteIds$
            .subscribe(data => {
                return this.collectionFavoritesIds = data;
            });
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
