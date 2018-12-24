import { Discover } from './../../../models';
import * as TvShowsActions from './../actions/tv-shows.actions';

export interface StateTvShows {
    properties: object;
    loading: boolean;
    error: string;
    data: Discover[];
}

const initialState: StateTvShows = {
    properties: {},
    loading: false,
    error: '',
    data: []
};

export function reducer(
    state = initialState,
    action: TvShowsActions.TvShowsActionsUnion
  ): StateTvShows {
    switch (action.type) {

        case TvShowsActions.TvShowsActionTypes.FilterPropertiesTvShows: {
            return {
                ...state,
                properties: action.payload
            };
        }

        case TvShowsActions.TvShowsActionTypes.LoadTvShowsSuccess: {
            return {
                ...state,
                loading: true,
                data: action.payload
            };
        }

        case TvShowsActions.TvShowsActionTypes.LoadTvShowsFailure: {
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

  export const getTvShowsLoading = (state: StateTvShows) => state.loading;
  export const getTvShowsProperties = (state: StateTvShows) => state.properties;
  export const getTvShowsResult = (state: StateTvShows) => state.data;
  export const getTvShowsError = (state: StateTvShows) => state.error;
