import * as DetailsActions from './actions/details.actions';
import * as CreditsActions from './actions/credits.actions';
import * as RecommendationsActions from './actions/recommendations.actions';
import * as SimilarActions from './actions/similar.actions';

import * as fromDetails from './reducers/details.reducer';
import * as fromCredits from './reducers/credits.reducer';
import * as fromRecommendations from './reducers/recommendations.reducer';
import * as fromItemDetail from './reducers';


export {
    DetailsActions,
    CreditsActions,
    RecommendationsActions,
    SimilarActions,
    fromDetails,
    fromCredits,
    fromRecommendations,
    fromItemDetail
};
