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


  export interface State {
    popular: fromPopular.StatePopular;
    search: fromSearchReducer.StateSearch;
  }

  export const reducers: ActionReducerMap<State> = {
    popular: fromPopular.reducer,
    search: fromSearchReducer.reducer
  };

  /**
   * MetaReducers
   */
  export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [storeFreeze]
    : [];
