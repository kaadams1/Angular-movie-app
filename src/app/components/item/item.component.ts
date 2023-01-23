import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { IMAGE_SIZES } from '../../constants/image-sizes';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemData: Movie | null = null;

  imageSizes = IMAGE_SIZES;

  // console log to try and find item data from similar movies banner -
  // THIS WORKS, BUT PAGE DOESN'T LOAD
  ngOnInit(): void {
    console.log(this.itemData);
  }
}
