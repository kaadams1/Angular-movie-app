import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  movies: Movie[] = [];
  genreId: string | null = null;
  searchValue: string | null = null;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getMoviesByGenre(genreId, 1);
      } else {
        this.getPagedMovies(1);
      }
    });
  }

  getMoviesByGenre(genreId: string, page: number) {
    this.moviesService.getMoviesByGenre(genreId, page).subscribe((movies) => {
      this.movies = movies;
    });
  }

  getPagedMovies(page: number, searchInput?: string) {
    this.moviesService.searchMovies(page, searchInput).subscribe((movies) => {
      this.movies = movies;
    });
  }

  paginate(event: any) {
    const pageNumber = event.page + 1;

    if (this.genreId) {
      this.getMoviesByGenre(this.genreId, pageNumber);
    } else {
      if (this.searchValue) {
        this.getPagedMovies(pageNumber, this.searchValue);
      } else {
        this.getPagedMovies(pageNumber);
      }
    }
  }

  searchChanged() {
    if (this.searchValue) {
      this.getPagedMovies(1, this.searchValue);
    }
  }
}
