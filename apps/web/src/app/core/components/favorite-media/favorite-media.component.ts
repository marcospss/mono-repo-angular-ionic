import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from './../../../reducers';
import { Media } from '@platform/core/models';
import { UtilsProvider } from '@platform/core/services';
import * as FavoritesActions from './../../../favorites/actions/favorites.actions';
import { FavoritesService } from './../../services';

@Component({
    selector: 'mps-favorite-media',
    templateUrl: './favorite-media.component.html',
    styleUrls: ['./favorite-media.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteMediaComponent implements OnInit {
    isFavorite$: Observable<boolean>;
    mediaType = 'movie';

    @Input() item: Media;

    constructor(
        private store: Store<fromRoot.State>,
        public utilsProvider: UtilsProvider,
        private db: FavoritesService
    ) {

    }

    ngOnInit(): void {
        this.isFavorite$ = this.db.isFavorite(this.item);
    }

    addItem() {
        const mediaType = { mediaType: this.mediaType },
            mediaItem = Object.assign({}, this.item, mediaType);
            this.store.dispatch(new FavoritesActions.AddFavorite(mediaItem));
    }

    removeItem() {
        this.store.dispatch(new FavoritesActions.RemoveFavorite(this.item));
    }

}
