import {
    ActionReducerMap, createFeatureSelector, createSelector
  } from '@ngrx/store';

import * as fromTvShows from './tv-shows.reducer';

export interface TvShowsState {
    tvShows: fromTvShows.StateTvShows;
}

export const reducers: ActionReducerMap<TvShowsState> = {
    tvShows: fromTvShows.reducer
};

export const getStateTvShows = createFeatureSelector<TvShowsState>('tvShows');

export const getTvShowsState = createSelector(
    getStateTvShows,
    (state: TvShowsState) => state.tvShows
);

export const getTvShowsLoading = createSelector(
    getTvShowsState,
    fromTvShows.getTvShowsLoading
);

export const getTvShowsProperties = createSelector(
    getTvShowsState,
    fromTvShows.getTvShowsProperties
);

export const getTvShowsResult = createSelector(
    getTvShowsState,
    fromTvShows.getTvShowsResult
);

export const getTvShowsError = createSelector(
    getTvShowsState,
    fromTvShows.getTvShowsError
);

