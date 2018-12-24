import { Credits } from './../../../models';
import { CreditsActions } from './../actions';

export interface StateCredits {
    properties: object;
    loading: boolean;
    error: string;
    data: Credits[];
}

const initialState: StateCredits = {
    properties: {},
    loading: false,
    error: '',
    data: []
};

export function reducer(
    state = initialState,
    action: CreditsActions.CreditsActionsUnion
  ): StateCredits {
    switch (action.type) {

        case CreditsActions.CreditsActionTypes.FilterPropertiesCredits: {
            return {
                ...state,
                properties: action.payload
            };
        }

        case CreditsActions.CreditsActionTypes.CreditsLoadSuccess: {
            return {
                ...state,
                loading: true,
                data: action.payload
            };
        }

        case CreditsActions.CreditsActionTypes.CreditsLoadFailure: {
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

  export const getCreditsLoading = (state: StateCredits) => state.loading;
  export const getCreditsProperties = (state: StateCredits) => state.properties;
  export const getCreditsResults = (state: StateCredits) => state.data;
  export const getCreditsError = (state: StateCredits) => state.error;
