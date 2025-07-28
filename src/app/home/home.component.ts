import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { BlogPostCardComponent } from '../shared/components/blog-post-card/blog-post-card.component';
import { BooksCarouselComponent } from '../shared/components/books-carousel/books-carousel.component';
import { BlogDisplay } from '../models/blogDisplay';

@Component({
  selector: 'app-home',
  imports: [BlogPostCardComponent,BooksCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  currentSeasonBooks: any[] = [];
  recentBlogs: BlogDisplay[] = [];
  constructor(private homeService: HomeService){

  }

  ngOnInit(): void {
    this.homeService.getSeasonBooks().subscribe(response => {
      this.currentSeasonBooks = response.data;
    })
    this.homeService.getRecentBlogs().subscribe(response=> {
      this.recentBlogs = response.data;
    })
  }



}
