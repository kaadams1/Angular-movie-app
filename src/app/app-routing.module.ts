import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresComponent } from './pages/genres/genres.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvShowsComponent } from './pages/tvshows/tvshows.component';
import { TvShowComponent } from './pages/tvshow/tvshow.component';
import { MovieComponent } from './pages/movie/movie.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movies/genres/:genreId',
    component: MoviesComponent
  },
  {
    path: 'tvshows',
    component: TvShowsComponent
  },
  {
    path: 'genres',
    component: GenresComponent
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  },
  {
    path: 'genres',
    component: GenresComponent
  },
  {
    path: 'tvshow/:id',
    component: TvShowComponent
  },
  {
    path: 'tvshows/genres/:genreId',
    component: TvShowsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
