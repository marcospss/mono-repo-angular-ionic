import {
    ActionReducerMap,
    MetaReducer,
    createFeatureSelector,
    createSelector
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '@environments';
import { fromPopular } from '@platform/core/state/movies';
import { fromSearchReducer } from '@platform/core/state/search';
import * as fromFavorites from './../favorites/reducers/favorites.reducer';

  export interface State {
    popular: fromPopular.StatePopular;
    search: fromSearchReducer.StateSearch;
    favorites: fromFavorites.State;
  }

  export const reducers: ActionReducerMap<State> = {
    popular: fromPopular.reducer,
    search: fromSearchReducer.reducer,
    favorites: fromFavorites.reducer
  };

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
