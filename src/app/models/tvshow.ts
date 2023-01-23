import { Genre } from './genres';

export interface TvShow {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  genres: Genre[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  name: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue: number;
  runtime: number;
  status: string;
}

export interface TvDto {
  page: number;
  results: TvShow[];
  total_results: number;
  total_pages: number;
}

export interface TvShowVideoDto {
  id: number;
  results: TvShowVideo[];
}

export interface TvShowVideo {
  site: string;
  key: string;
}

export interface TvShowImages {
  backdrops: {
    file_path: string;
  }[];
}

export interface TvShowCredits {
  cast: {
    name: string;
    profile_path: string;
  }[];
}
