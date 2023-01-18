import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'a2745bc1c96d6c4853df4261ba79b42a';

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'popular') {
    return this.http.get(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`);
  }
}
