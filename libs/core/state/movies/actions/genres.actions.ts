import { Action } from '@ngrx/store';
import { Genres } from '../../../models';

export enum GenresActionTypes {
    FilterPropertiesGenres = '[Movie/Genres] Filter Properties Genres',
    LoadGenresSuccess = '[Movie/Genres] Load Genres Success',
    LoadGenresFailure = '[Movie/Genres] Load Genres Failure'
}

export class FilterPropertiesGenres implements Action {
    readonly type = GenresActionTypes.FilterPropertiesGenres;

    constructor(public payload: any) {}

  }

export class LoadGenresSuccess implements Action {
    readonly type = GenresActionTypes.LoadGenresSuccess;

    constructor(public payload: Genres[]) {}
}

export class LoadGenresFailure implements Action {
    readonly type = GenresActionTypes.LoadGenresFailure;

    constructor(public payload: any) {}
}

export type GenresActionsUnion =
    | FilterPropertiesGenres
    | LoadGenresSuccess
    | LoadGenresFailure;
