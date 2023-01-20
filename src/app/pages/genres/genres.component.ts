import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { TvShowsService } from '../../services/tvShows.service';
import { Genre } from '../../models/genres';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent {
  genres: Genre[] = [];
  tvShowGenres: Genre[] = [];

  constructor(private moviesService: MoviesService, private tvShowsService: TvShowsService) {}

  ngOnInit(): void {
    this.moviesService.getMovieGenres().subscribe((genresData) => {
      this.genres = genresData;
    });

    this.tvShowsService.getTvGenres().subscribe((genresData) => {
      this.tvShowGenres = genresData;
    });
  }
}
