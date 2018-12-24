import {
    ActionReducerMap,
    MetaReducer,
    createFeatureSelector,
    createSelector
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '@environments';
import { fromMovies } from '@platform/core/state/movies';
import { fromTvShows } from '@platform/core/state/tv-shows';
import * as fromFavorites from './../../pages/favorites/reducers/favorites.reducer';
export interface State {
    tvShows: fromTvShows.StateTvShows;
    favorites: fromFavorites.State;
}

export const reducers: ActionReducerMap<State> = {
    tvShows: fromTvShows.reducer,
    favorites: fromFavorites.reducer
};

/**
 * TV SHOWS
 */

export const getStateTvShows = createFeatureSelector<State>('tvShows');

export const getTvShowsState = createSelector(
    getStateTvShows,
    (state: State) => state.tvShows
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

/**
 * Favorites
 */

export const getStateFavorites = createFeatureSelector<State>('favorites');

export const getFavoritesStates = createSelector(
    getStateFavorites,
    (state: State) => state.favorites
);

export const selectAllFavorites = createSelector(
    getFavoritesStates,
    fromFavorites.selectAllFavorites
);

export const selectFavoritesEntities = createSelector(
    getFavoritesStates,
    fromFavorites.selectFavoritesEntities
);

export const selectFavoriteIds = createSelector(
    getFavoritesStates,
    fromFavorites.selectFavoritesIds
);

export const selectFavoritesTotal = createSelector(
    getFavoritesStates,
    fromFavorites.selectFavoritesTotal
);

export const selectFavorites = createSelector(
    getFavoritesStates,
    fromFavorites.getSelectedFavoriteId
);

export const selectCurrentFavorite = createSelector(
    selectFavoritesEntities,
    selectFavorites,
    (favoritesEntities, favoriteId) => favoritesEntities[favoriteId]
);

/**
 * MetaReducers
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [storeFreeze]
    : [];
