import * as DiscoverActions from './actions/discover.actions';
import * as TopRatedActions from './actions/top-rated.actions';

import * as fromPopular from "./reducers/popular.reducer";
import * as fromTopRated from "./reducers/top-rated.reducer";
import * as fromMovies from './reducers';

export {
    DiscoverActions,
    TopRatedActions,
    fromPopular,
    fromTopRated,
    fromMovies
};
