import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { DiscoverProvider, CommonProvider } from './../../../services';
import { Discover, Genres } from './../../../models';
import * as DiscoverActions from '../actions/discover.actions';
import * as TopRatedActions from '../actions/top-rated.actions';
import * as GenresActions from '../actions/genres.actions';

@Injectable()
export class MoviesEffects {

    constructor(
        private actions$: Actions,
        private discoverProvider: DiscoverProvider,
        private commonProvider: CommonProvider
    ) {}

    @Effect()
    loadPopular$: Observable<Action> =  this.actions$.pipe(
        ofType<DiscoverActions.FilterPropertiesMovie>(DiscoverActions.MoviesActionTypes.FilterPropertiesMovie),
        map(action => action.payload),
        mergeMap(properties => {
            return this.discoverProvider.getDiscover(properties).pipe(
                map((movies: Discover[]) => new DiscoverActions.LoadMoviesSuccess(movies)),
                catchError(err => Observable.of(new DiscoverActions.LoadMoviesFailure(err)))
            );
        })
    );

    @Effect()
    loadTopRated$: Observable<Action> =  this.actions$.pipe(
        ofType<TopRatedActions.FilterPropertiesMovie>(TopRatedActions.MoviesActionTypes.FilterPropertiesMovie),
        map(action => action.payload),
        mergeMap(properties => {
            return this.commonProvider.getTopRated(properties).pipe(
                map((movies: Discover[]) => new TopRatedActions.LoadMoviesSuccess(movies)),
                catchError(err => Observable.of(new TopRatedActions.LoadMoviesFailure(err)))
            );
        })
    );

    @Effect()
    loadGenres$: Observable<Action> =  this.actions$.pipe(
        ofType<GenresActions.FilterPropertiesGenres>(GenresActions.GenresActionTypes.FilterPropertiesGenres),
        map(action => action.payload),
        mergeMap(properties => {
            return this.commonProvider.getGenre(properties).pipe(
                map((genres: Genres[]) => new GenresActions.LoadGenresSuccess(genres)),
                catchError(err => Observable.of(new GenresActions.LoadGenresFailure(err)))
            );
        })
    );

}
