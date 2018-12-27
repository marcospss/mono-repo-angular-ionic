import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from './../../environments/environment';
import { Credits, Discover, Details, Genres  } from './../../models';

@Injectable()
export class CommonProvider {

  constructor(private http: HttpClient) {}

  /**
   * Get Credits
   * Get the cast and crew for a movie.
   * Get the credits (cast and crew) that have been added to a TV show.
   * @method getCredits(properties: object)
   * @param properties
   * @returns Returns the cast and crew of a movie or TV show.
   */
  getCredits(properties: object): Observable<Credits[]> {
    const mediaType = properties['mediaType'],
    id = properties['mediaId'];
    return this.http.get<Credits[]>
        (`${environment.apiEndpoint}/${mediaType}/${id}/credits?api_key=${environment.apikey}&language=${environment.language}`);
  }

  /**
   * Get Recommendations
   * Get a list of recommended movies for a movie or list of TV show recommendations for this item.
   * @param properties
   */
  getRecommendations(properties: object): Observable<Discover[]> {
    const mediaType = properties['mediaType'],
    id = properties['mediaId'];
    return this.http.get<Discover[]>
        (`${environment.apiEndpoint}/${mediaType}/${id}/recommendations?api_key=${environment.apikey}&language=${environment.language}`);
  }

  /**
   * Get Similar
   * Get a list of similar movies. This is not the same as the "Recommendation" system you see on the website.
   * Get a list of similar TV shows. These items are assembled by looking at keywords and genres.
   * @param properties
   */
  getSimilar(properties: object): Observable<Discover[]> {
    const mediaType = properties['mediaType'],
    id = properties['mediaId'];
    return this.http.get<Discover[]>
        (`${environment.apiEndpoint}/${mediaType}/${id}/similar?api_key=${environment.apikey}&language=${environment.language}`);
  }

  /**
   * Get Top Rated
   * Get the top rated movies/tv shows on TMDb.
   * @param properties
   */
  getTopRated(properties: object): Observable<Discover[]> {
    const mediaType = properties['mediaType'];
    return this.http.get<Discover[]>
        (`${environment.apiEndpoint}/${mediaType}/top_rated?api_key=${environment.apikey}&language=${environment.language}`);
  }

  /**
   * Get Details
   * Get the primary information about a movies/tv shows.
   * @param properties
   */
  getDetails(properties: object): Observable<Details[]> {
    const mediaType = properties['mediaType'],
    id = properties['mediaId'];
    return this.http.get<Details[]>
        (`${environment.apiEndpoint}/${mediaType}/${id}?api_key=${environment.apikey}&language=${environment.language}`);
  }

  /**
   * Get Genres
   * Get the list of official genres for movies/TV shows.
   * @param properties
   */
  getGenre(mediaType:string): Observable<Genres[]> {
    return this.http.get<Genres[]>
        (`${environment.apiEndpoint}/genre/${mediaType}/list?api_key=${environment.apikey}&language=${environment.language}`);
  }

  /**
   * Get Years
   * Return list years
   */
    getYears(): number[] {
        const arrYears: Array<number> = [],
            date: Date = new Date(),
            currentYear: number = date.getFullYear();

        for (let year = currentYear + 1; year >= 1900; year -= 1) {
            arrYears.push(year);
        }
        return arrYears;
    }

}
