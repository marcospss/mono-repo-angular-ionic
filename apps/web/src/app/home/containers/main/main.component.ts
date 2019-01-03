import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { fromMovies, DiscoverActions, TopRatedActions } from '@platform/core/state/movies';
import { Discover } from '@models';

@Component({
  selector: 'mps-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

    mediasPopular$: Observable<Discover[]>;
    mediasTopRated$: Observable<Discover[]>;
    mediaType = 'movie';
    constructor(
        private store: Store<fromMovies.MoviesStates>
    ) {
        this.mediasPopular$ = store.pipe(select(fromMovies.getMoviesPopularResult));
        this.mediasTopRated$ = store.pipe(select(fromMovies.getMoviesTopRatedResult));
    }

  ngOnInit() {
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
    /**
     * Top Rated
     */
    const filterTopRatedProperties = {
        mediaType: 'movie'
    };
    this.store.dispatch(new TopRatedActions.FilterPropertiesMovie(filterTopRatedProperties));
  }

}
