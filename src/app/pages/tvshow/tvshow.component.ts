import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { TvShow, TvShowVideo, TvShowImages, TvShowCredits } from '../../models/tvshow';
import { TvShowsService } from '../../services/tvShows.service';
import { IMAGE_SIZES } from '../../constants/image-sizes';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvShowComponent implements OnInit, OnDestroy {
  tvShow: TvShow | null = null;
  tvShowVideos: TvShowVideo[] = [];
  tvShowImages: TvShowImages | null = null;
  tvShowCredits: TvShowCredits | null = null;
  similarTvShows: TvShow[] = [];
  imageSizes = IMAGE_SIZES;

  constructor(private route: ActivatedRoute, private tvShowsService: TvShowsService) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getTvShow(id);
      this.getTvShowVideos(id);
      this.getTvShowImages(id);
      this.getTvShowCredits(id);
      this.getTvShowsSimilar(id);
    });
  }

  ngOnDestroy(): void {
    console.log('component destroyed');
  }

  getTvShow(id: string) {
    this.tvShowsService.getTvShow(id).subscribe((tvShowData) => {
      this.tvShow = tvShowData;
      console.log(tvShowData); // nothing logged in the console; not receiving any data?
    });
  }

  getTvShowVideos(id: string) {
    this.tvShowsService.getTvShowVideos(id).subscribe((tvShowVideosData) => {
      this.tvShowVideos = tvShowVideosData;
    });
  }

  getTvShowImages(id: string) {
    this.tvShowsService.getTvImages(id).subscribe((tvShowImagesData) => {
      this.tvShowImages = tvShowImagesData;
    });
  }

  getTvShowCredits(id: string) {
    this.tvShowsService.getTvCredits(id).subscribe((tvShowCreditsData) => {
      this.tvShowCredits = tvShowCreditsData;
    });
  }

  getTvShowsSimilar(id: string) {
    this.tvShowsService.getTvShowsSimilar(id).subscribe((tvShowSimilarData) => {
      this.similarTvShows = tvShowSimilarData;
    });
  }
}
