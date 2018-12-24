export interface Media {
    video: false;
    title?: string;
    original_title?: string;
    adult?: boolean;
    release_date?: Date;
    original_name?: string;
    genre_ids: number[];
    name?: string;
    popularity: number;
    origin_country: string[];
    vote_count: number;
    first_air_date?: Date;
    backdrop_path: string;
    original_language: string;
    id: number;
    vote_average: string;
    overview: string;
    poster_path: string;
    mediaType?: string;
}
