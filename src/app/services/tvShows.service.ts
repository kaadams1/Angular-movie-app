import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TvShow, TvDto, TvShowVideoDto, TvShowVideo, TvShowImages, TvShowCredits } from '../models/tvshow';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GenresDto } from '../models/genres';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'a2745bc1c96d6c4853df4261ba79b42a';

  constructor(private http: HttpClient) {}

  getTvShows(type: string = 'popular', count: number = 12) {
    return this.http.get<TvDto>(`${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }

  getTvShow(id: string) {
    return this.http.get<TvShow>(`${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`);
  }

  searchTvShows(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/tv' : '/tv/popular';

    return this.http.get<TvDto>(`${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  getTvShowVideos(id: string) {
    return this.http.get<TvShowVideoDto>(`${this.baseUrl}/tv/${id}/videos?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  getTvImages(id: string) {
    return this.http.get<TvShowImages>(`${this.baseUrl}/tv/${id}/images?api_key=${this.apiKey}`).pipe();
  }

  getTvCredits(id: string) {
    return this.http.get<TvShowCredits>(`${this.baseUrl}/tv/${id}/credits?api_key=${this.apiKey}`);
  }

  getTvByGenre(genreId: string, pageNumber: number) {
    return this.http
      .get<TvDto>(`${this.baseUrl}/discover/tv?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getTvGenres() {
    return this.http.get<GenresDto>(`${this.baseUrl}/genre/tv/list?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.genres);
      })
    );
  }

  getTvShowsSimilar(id: string) {
    return this.http.get<TvDto>(`${this.baseUrl}/tv/${id}/similar?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, 12));
      })
    );
  }
}
