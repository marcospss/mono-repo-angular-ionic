import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { fromMovies, DiscoverActions, GenresActions } from '@platform/core/state/movies';
import { Genres, Discover } from '@models';

@Component({
    selector: 'mps-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
    genres$: Observable<Genres[]>;
    mediasPopular$: Observable<Discover[]>;

    constructor(
        private store: Store<fromMovies.MoviesStates>
    ) {
        this.genres$ = store.pipe(select(fromMovies.getGenresResult));
        this.mediasPopular$ = store.pipe(select(fromMovies.getMoviesPopularResult));
    }

    ngOnInit() {
        /**
         * Genres
         */
        this.store.dispatch(new GenresActions.FilterPropertiesGenres('movie'));

        /**
         * Discover
         */
        const filterDiscoverProperties = {
            mediaType: 'movie',
            sortBy: 'popularity.desc',
            year: '',
            genre: ''
        };
        this.store.dispatch(new DiscoverActions.FilterPropertiesMovie(filterDiscoverProperties));
    }

    filterMovies(filterMoviesProperties: object): void {
        this.store.dispatch(new DiscoverActions.FilterPropertiesMovie(filterMoviesProperties));
    }

}
