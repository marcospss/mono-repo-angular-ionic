import {
    ActionReducerMap,
    MetaReducer,
    createFeatureSelector,
    createSelector
  } from '@ngrx/store';
  import { storeFreeze } from 'ngrx-store-freeze';
  import { environment } from '@environments';
  import { fromPopular } from '@platform/core/state/movies';


  export interface State {
    popular: fromPopular.StatePopular;
  }

  export const reducers: ActionReducerMap<State> = {
    popular: fromPopular.reducer
  };

  /**
   * MetaReducers
   */
  export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [storeFreeze]
    : [];
