import { Component, Input } from '@angular/core';
import { TvShow } from '../../models/tvshow';

@Component({
  selector: 'app-tv-items-banner',
  templateUrl: './tv-items-banner.component.html',
  styleUrls: ['./tv-items-banner.component.scss']
})
export class TvItemsBannerComponent {
  @Input() tvItems: TvShow[] = [];
  @Input() title: string = '';
}
