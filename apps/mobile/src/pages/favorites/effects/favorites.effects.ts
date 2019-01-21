import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { NotificationsService, FavoritesService } from './../../../core/services';
import { Media } from '@platform/core/models';
import * as FavoritesActions from './../actions/favorites.actions';
import { Observable } from 'rxjs';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class FavoritesEffects {
    constructor(
        private actions$: Actions,
        private db: FavoritesService,
        private notifications: NotificationsService
        ) {}

    @Effect()
    loadFavorites$: Observable<Action> =  this.actions$.pipe(
        ofType(FavoritesActions.FavoritesActionTypes.LoadFavoritesCollection),
        switchMap(() =>
            this.db.getAll().pipe(
                map((favorites: Media[]) => new FavoritesActions.LoadFavoritesSuccess(favorites)),
                catchError(err => Observable.of(new FavoritesActions.LoadFavoritesFailure(err)))
            )
        )
    );

    @Effect()
    saveFavorite$: Observable<Action> =  this.actions$.pipe(
        ofType<FavoritesActions.AddFavorite>(FavoritesActions.FavoritesActionTypes.AddFavorite),
        map(action => action.payload),
        mergeMap(favorite =>
            this.db.save(favorite).pipe(
                map(() => {
                    this.notifications.showToast('bottom', 'Saved successfully!');
                    return new FavoritesActions.ActionFavoriteSuccess(favorite);
                }),
                catchError(err => Observable.of(new FavoritesActions.AddFavoriteFailure(err)))
            )
        )
    );

    @Effect()
    removeFavorite$: Observable<Action> =  this.actions$.pipe(
        ofType<FavoritesActions.RemoveFavorite>(FavoritesActions.FavoritesActionTypes.RemoveFavorite),
        map(action => action.payload),
        mergeMap(favorite =>
            this.db.remove(favorite).pipe(
                map(() => {
                    this.notifications.showToast('bottom', 'Removed successfully!');
                    return new FavoritesActions.ActionFavoriteSuccess(favorite);
                }),
                catchError(err => Observable.of(new FavoritesActions.RemoveFavoriteFailure(err)))
            )
        )
    );
}
