import { Component, Input } from '@angular/core';
import { TvShow } from '../../models/tvshow';
import { IMAGE_SIZES } from '../../constants/image-sizes';

@Component({
  selector: 'app-tv-item',
  templateUrl: './tv-item.component.html',
  styleUrls: ['./tv-item.component.scss']
})
export class TvItemComponent {
  @Input() tvItemData: TvShow | null = null;

  imageSizes = IMAGE_SIZES;
}
