import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap
  } from '@ngrx/store';

import * as fromDetails from './details.reducer';
import * as fromCredits from './credits.reducer';
import * as fromRecommendations from './recommendations.reducer';

export interface ItemDetailStates {
    details: fromDetails.StateDetails;
    credits: fromCredits.StateCredits;
    recommendations: fromRecommendations.StateRecommendations;
}

export const reducers: ActionReducerMap<ItemDetailStates> = {
    details: fromDetails.reducer,
    credits: fromCredits.reducer,
    recommendations: fromRecommendations.reducer
};


export const getItemDetailStates = createFeatureSelector<ItemDetailStates>('itemDetail');

/**
 * Details
 */
export const getStateDetails = createSelector(
    getItemDetailStates,
    (state: ItemDetailStates) => state.details
);

export const getDetailsLoading = createSelector(
    getStateDetails,
    fromDetails.getDetailsLoading
);

export const getDetailsProperties = createSelector(
    getStateDetails,
    fromDetails.getDetailsProperties
);

export const getDetailsResults = createSelector(
    getStateDetails,
    fromDetails.getDetailsResults
);

export const getDetailsError = createSelector(
    getStateDetails,
    fromDetails.getDetailsError
);

/**
 * Credits
 */
export const getStateCredits = createSelector(
    getItemDetailStates,
    (state: ItemDetailStates) => state.credits
);

export const getCreditsLoading = createSelector(
    getStateCredits,
    fromCredits.getCreditsLoading
);

export const getCreditsProperties = createSelector(
    getStateCredits,
    fromCredits.getCreditsProperties
);

export const getCreditsResults = createSelector(
    getStateCredits,
    fromCredits.getCreditsResults
);

export const getCreditsError = createSelector(
    getStateCredits,
    fromCredits.getCreditsError
);

/**
 * Recommendations
 */
export const getStateRecommendations = createSelector(
    getItemDetailStates,
    (state: ItemDetailStates) => state.recommendations
);

export const getRecommendationsLoading = createSelector(
    getStateRecommendations,
    fromRecommendations.getRecommendationsLoading
);

export const getRecommendationsProperties = createSelector(
    getStateRecommendations,
    fromRecommendations.getRecommendationsProperties
);

export const getRecommendationsResults = createSelector(
    getStateRecommendations,
    fromRecommendations.getRecommendationsResults
);

export const getRecommendationsError = createSelector(
    getStateRecommendations,
    fromRecommendations.getRecommendationsError
);
