import { Genres } from './../../../models';
import * as GenresActions from '../actions/genres.actions';

export interface StateGenres {
    properties: string;
    loading: boolean;
    error: string;
    data: Genres[];
}

const initialState: StateGenres = {
    properties: null,
    loading: false,
    error: '',
    data: []
};

export function reducer(
    state = initialState,
    action: GenresActions.GenresActionsUnion
  ): StateGenres {
    switch (action.type) {

        case GenresActions.GenresActionTypes.FilterPropertiesGenres: {
            return {
                ...state,
                properties: action.payload
            };
        }

        case GenresActions.GenresActionTypes.LoadGenresSuccess: {
            return {
                ...state,
                loading: true,
                data: action.payload
            };
        }

        case GenresActions.GenresActionTypes.LoadGenresFailure: {
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

  export const getGenresLoading = (state: StateGenres) => state.loading;
  export const getGenresProperties = (state: StateGenres) => state.properties;
  export const getGenresResult = (state: StateGenres) => state.data;
  export const getGenresError = (state: StateGenres) => state.error;
