import { MultiSearch } from './../../../models';
import * as SearchActions from './../actions/search.actions';

export interface StateSearch {
    query: string;
    loading: boolean;
    error: string;
    data: MultiSearch[];
}

const initialState: StateSearch = {
    query: null,
    loading: false,
    error: '',
    data: []
};

export function reducer(
    state = initialState,
    action: SearchActions.SearchActionsUnion
  ): StateSearch {
    switch (action.type) {

        case SearchActions.SearchActionTypes.SearchQuery: {
            return {
                ...state,
                query: action.payload
            };
        }

        case SearchActions.SearchActionTypes.SearchSuccess: {
            return {
                ...state,
                loading: true,
                data: action.payload
            };
        }

        case SearchActions.SearchActionTypes.SearchFailure: {
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        }

        case SearchActions.SearchActionTypes.SearchClearAll: {
            return initialState;
        }

        default: {
            return state;
        }
    }
  }

  export const getSearchLoading = (state: StateSearch) => state.loading;
  export const getSearchQuery = (state: StateSearch) => state.query;
  export const getSearchResult = (state: StateSearch) => state.data;
  export const getSearchError = (state: StateSearch) => state.error;
