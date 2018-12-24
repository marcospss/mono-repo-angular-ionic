import { Discover } from './../../../models';
import * as DiscoverActions from '../actions/discover.actions';

export interface StatePopular {
    properties: object;
    loading: boolean;
    error: string;
    data: Discover[];
}

const initialState: StatePopular = {
    properties: {},
    loading: false,
    error: '',
    data: []
};

export function reducer(
    state = initialState,
    action: DiscoverActions.MoviesActionsUnion
  ): StatePopular {
    switch (action.type) {

        case DiscoverActions.MoviesActionTypes.FilterPropertiesMovie: {
            return {
                ...state,
                properties: action.payload
            };
        }

        case DiscoverActions.MoviesActionTypes.LoadMoviesSuccess: {
            return {
                ...state,
                loading: true,
                data: action.payload
            };
        }

        case DiscoverActions.MoviesActionTypes.LoadMoviesFailure: {
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        }

        default: {
            return state;
        }
    }
  }

  export const getMoviesLoading = (state: StatePopular) => state.loading;
  export const getMoviesProperties = (state: StatePopular) => state.properties;
  export const getMoviesResult = (state: StatePopular) => state.data;
  export const getMoviesError = (state: StatePopular) => state.error;
