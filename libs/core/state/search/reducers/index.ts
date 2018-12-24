import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap
  } from '@ngrx/store';

import * as fromSearch from './search.reducer';

export interface SearchStates {
    search: fromSearch.StateSearch;
}

export const reducers: ActionReducerMap<SearchStates> = {
    search: fromSearch.reducer
};

export const getStateSearch = createFeatureSelector<SearchStates>('search');

export const getSearchStates = createSelector(
    getStateSearch,
    (state: SearchStates) => state.search
);

export const getSearchLoading = createSelector(
    getSearchStates,
    fromSearch.getSearchLoading
);

export const getSearchQuery = createSelector(
    getSearchStates,
    fromSearch.getSearchQuery
);

export const getSearchResult = createSelector(
    getSearchStates,
    fromSearch.getSearchResult
);

export const getSearchError = createSelector(
    getSearchStates,
    fromSearch.getSearchError
);
