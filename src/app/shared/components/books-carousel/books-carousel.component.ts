import { Component, Input } from '@angular/core';
import { StarRatingComponent } from '../../star-rating/star-rating.component';

@Component({
  selector: 'app-books-carousel',
  imports: [StarRatingComponent],
  templateUrl: './books-carousel.component.html',
  styleUrl: './books-carousel.component.css'
})
export class BooksCarouselComponent {
  @Input() currentSeasonBooks: any[] = [];
  


}
