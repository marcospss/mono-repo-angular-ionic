import { Discover } from './../../../models';
import * as TopRatedActions from '../actions/top-rated.actions';

export interface StateTopRated {
    properties: object;
    loading: boolean;
    error: string;
    data: Discover[];
}

const initialState: StateTopRated = {
    properties: {},
    loading: false,
    error: '',
    data: []
};

export function reducer(
    state = initialState,
    action: TopRatedActions.MoviesActionsUnion
  ): StateTopRated {
    switch (action.type) {

        case TopRatedActions.MoviesActionTypes.FilterPropertiesMovie: {
            return {
                ...state,
                properties: action.payload
            };
        }

        case TopRatedActions.MoviesActionTypes.LoadMoviesSuccess: {
            return {
                ...state,
                loading: true,
                data: action.payload
            };
        }

        case TopRatedActions.MoviesActionTypes.LoadMoviesFailure: {
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

  export const getMoviesLoading = (state: StateTopRated) => state.loading;
  export const getMoviesProperties = (state: StateTopRated) => state.properties;
  export const getMoviesResult = (state: StateTopRated) => state.data;
  export const getMoviesError = (state: StateTopRated) => state.error;
