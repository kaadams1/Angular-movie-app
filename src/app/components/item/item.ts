export interface Item {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  vote_average: number;
  backdrop_path: string;
  vote_count: number;
  release_date: string;
  overview: string;
  routePath?: string;
}
