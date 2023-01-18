import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDto } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'a2745bc1c96d6c4853df4261ba79b42a';

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'popular', count: number = 12) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }

  searchMovies(page: number) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }
}
