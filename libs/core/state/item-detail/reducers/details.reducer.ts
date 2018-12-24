import { Details } from './../../../models';
import { DetailsActions } from './../actions';

export interface StateDetails {
    properties: object;
    loading: boolean;
    error: string;
    data: Details[];
}

const initialState: StateDetails = {
    properties: {},
    loading: false,
    error: '',
    data: []
};

export function reducer(
    state = initialState,
    action: DetailsActions.DetailsActionsUnion
  ): StateDetails {
    switch (action.type) {

        case DetailsActions.DetailsActionTypes.FilterPropertiesDetails: {
            return {
                ...state,
                properties: action.payload
            };
        }

        case DetailsActions.DetailsActionTypes.DetailsLoadSuccess: {
            return {
                ...state,
                loading: true,
                data: action.payload
            };
        }

        case DetailsActions.DetailsActionTypes.DetailsLoadFailure: {
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

  export const getDetailsLoading = (state: StateDetails) => state.loading;
  export const getDetailsProperties = (state: StateDetails) => state.properties;
  export const getDetailsResults = (state: StateDetails) => state.data;
  export const getDetailsError = (state: StateDetails) => state.error;
