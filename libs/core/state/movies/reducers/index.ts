import {
    ActionReducerMap, createSelector, createFeatureSelector
} from '@ngrx/store';

import * as fromPopular from './popular.reducer';
import * as fromTopRated from './top-rated.reducer';
import * as fromGenres from './genres.reducer';

export interface MoviesStates {
    popular: fromPopular.StatePopular;
    topRated: fromTopRated.StateTopRated;
    genres: fromGenres.StateGenres;
}

export const reducers: ActionReducerMap<MoviesStates> = {
    popular: fromPopular.reducer,
    topRated: fromTopRated.reducer,
    genres: fromGenres.reducer
};

export const getStateMovies = createFeatureSelector<MoviesStates>('movies');


/**
 * MOVIES POPULAR
 */

export const getMoviesPopularStates = createSelector(
    getStateMovies,
    (state: MoviesStates) => state.popular
);

export const getMoviesPopularLoading = createSelector(
    getMoviesPopularStates,
    fromPopular.getMoviesLoading
);

export const getMoviesPopularProperties = createSelector(
    getMoviesPopularStates,
    fromPopular.getMoviesProperties
);

export const getMoviesPopularResult = createSelector(
    getMoviesPopularStates,
    fromPopular.getMoviesResult
);

export const getMoviesPopularError = createSelector(
    getMoviesPopularStates,
    fromPopular.getMoviesError
);


/**
 * MOVIES TOP RATED
 */

export const getMoviesTopRatedStates = createSelector(
    getStateMovies,
    (state: MoviesStates) => state.topRated
);

export const getMoviesTopRatedLoading = createSelector(
    getMoviesTopRatedStates,
    fromPopular.getMoviesLoading
);

export const getMoviesTopRatedProperties = createSelector(
    getMoviesTopRatedStates,
    fromPopular.getMoviesProperties
);

export const getMoviesTopRatedResult = createSelector(
    getMoviesTopRatedStates,
    fromPopular.getMoviesResult
);

export const getMoviesTopRatedError = createSelector(
    getMoviesTopRatedStates,
    fromPopular.getMoviesError
);



/**
 * MOVIES GENRES
 */

export const getMoviesGenresStates = createSelector(
    getStateMovies,
    (state: MoviesStates) => state.genres
);

export const getGenresProperties = createSelector(
    getMoviesGenresStates,
    fromGenres.getGenresProperties
);

export const getGenresLoading = createSelector(
    getMoviesGenresStates,
    fromGenres.getGenresLoading
);

export const getGenresResult = createSelector(
    getMoviesGenresStates,
    fromGenres.getGenresResult
);

export const getGenresError = createSelector(
    getMoviesGenresStates,
    fromGenres.getGenresError
);
