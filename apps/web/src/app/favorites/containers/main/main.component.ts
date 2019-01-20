import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from './../../../reducers';
import { Media } from '@platform/core/models';
import { UtilsProvider } from '@platform/core/services';
import * as FavoritesActions from './../../../favorites/actions/favorites.actions';

@Component({
    selector: 'mps-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    mediaType = 'movie';
    favoriteCollection$: Observable<Media[]>;
    constructor(
        private store: Store<fromRoot.State>,
        public utilsProvider: UtilsProvider
    ) {
        this.favoriteCollection$ = store.pipe(select(fromRoot.selectAllFavorites));
    }

    ngOnInit() {
        this.store.dispatch(new FavoritesActions.LoadFavoritesCollection());
    }

}
