import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { CommonProvider } from './../../../services';
import { Details, Credits, Discover } from './../../../models';
import { DetailsActions, CreditsActions, RecommendationsActions, SimilarActions } from './../actions';

@Injectable()
export class ItemDetailEffects {

    constructor(
        private actions$: Actions,
        private commonProvider: CommonProvider
    ) {}

    @Effect()
    loadDetails$: Observable<Action> =  this.actions$.pipe(
        ofType<DetailsActions.SelectItem>(DetailsActions.DetailsActionTypes.SelectItem),
        map(action => action.payload),
        mergeMap(properties => {
            return this.commonProvider.getDetails(properties).pipe(
                map((data: Details[]) => new DetailsActions.DetailsLoadSuccess(data)),
                catchError(err => Observable.of(new DetailsActions.DetailsLoadFailure(err)))
            );
        })
    );

    @Effect()
    loadCredits$: Observable<Action> =  this.actions$.pipe(
        ofType<DetailsActions.SelectItem>(DetailsActions.DetailsActionTypes.SelectItem),
        map(action => action.payload),
        mergeMap(properties => {
            return this.commonProvider.getCredits(properties).pipe(
                map((data: Credits[]) => new CreditsActions.CreditsLoadSuccess(data)),
                catchError(err => Observable.of(new CreditsActions.CreditsLoadFailure(err)))
            );
        })
    );

    @Effect()
    loadRecommendations$: Observable<Action> =  this.actions$.pipe(
        ofType<DetailsActions.SelectItem>(DetailsActions.DetailsActionTypes.SelectItem),
        map(action => action.payload),
        mergeMap(properties => {
            return this.commonProvider.getRecommendations(properties).pipe(
                map((data: Discover[]) => new RecommendationsActions.RecommendationsLoadSuccess(data)),
                catchError(err => Observable.of(new RecommendationsActions.RecommendationsLoadFailure(err)))
            );
        })
    );

    @Effect()
    loadSimilar$: Observable<Action> =  this.actions$.pipe(
        ofType<SimilarActions.FilterPropertiesSimilar>(SimilarActions.SimilarActionTypes.FilterPropertiesSimilar),
        map(action => action.payload),
        mergeMap(properties => {
            return this.commonProvider.getSimilar(properties).pipe(
                map((data: Discover[]) => new SimilarActions.SimilarLoadSuccess(data)),
                catchError(err => Observable.of(new SimilarActions.SimilarLoadFailure(err)))
            );
        })
    );
}
