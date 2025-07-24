import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { BlogPostCardComponent } from '../shared/components/blog-post-card/blog-post-card.component';
import { BooksCarouselComponent } from '../shared/components/books-carousel/books-carousel.component';





@Component({
  selector: 'app-home',
  imports: [BlogPostCardComponent,BooksCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  currentSeasonBooks: any[] = [];
  constructor(private homeService: HomeService){

  }

  ngOnInit(): void {
    this.homeService.getSeasonBooks().subscribe(data => {
      this.currentSeasonBooks = data.seasonBooks;
    })
  }

  newBlogs = [
    {
      id : 1
    },
    {
      id : 2
    },
    {
      id : 3
    },
    {
      id : 4
    },
  ];


}
