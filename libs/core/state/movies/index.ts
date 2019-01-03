import * as DiscoverActions from './actions/discover.actions';
import * as TopRatedActions from './actions/top-rated.actions';
import * as GenresActions from './actions/genres.actions';

import * as fromPopular from "./reducers/popular.reducer";
import * as fromTopRated from "./reducers/top-rated.reducer";
import * as fromGenres from './reducers/genres.reducer';
import * as fromMovies from './reducers';

export {
    DiscoverActions,
    TopRatedActions,
    GenresActions,
    fromPopular,
    fromTopRated,
    fromGenres,
    fromMovies
};
