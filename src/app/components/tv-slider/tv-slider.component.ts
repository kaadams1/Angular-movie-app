import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IMAGE_SIZES } from '../../constants/image-sizes';

import { TvShow } from '../../models/tvshow';

@Component({
  selector: 'app-tv-slider',
  templateUrl: './tv-slider.component.html',
  styleUrls: ['./tv-slider.component.scss'],
  animations: [trigger('slideFade', [state('void', style({ opacity: 0 })), transition('void <=> *', [animate('1s')])])]
})
export class TvSliderComponent {
  @Input() tvItems: TvShow[] = [];
  @Input() isBanner: boolean = false;

  currentSlideIndex: number = 0;

  readonly imageSizes = IMAGE_SIZES;

  ngOnInit(): void {
    if (!this.isBanner) {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.tvItems.length;
      }, 5000);
    }
  }
}
