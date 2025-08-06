import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../book-list/book.service';
import { Book } from '../../../models/book';

@Component({
  selector: 'app-books-display',
  imports: [],
  templateUrl: './books-display.component.html',
  styleUrl: './books-display.component.css'
})
export class BooksDisplayComponent implements OnInit {
  currentBooks:Book[] = [];
  myBooks: Book[] = [];
  currentPage = 1;
  pageSize = 10;
  pageCount = Math.ceil(this.myBooks.length / this.pageSize);

  constructor(private bookService:BookService){

  }

  ngOnInit(): void {
    this.bookService.getMyBooks().subscribe(books => {
      this.myBooks = books;
      this.currentBooks = this.bookService.usePagination(this.currentPage,this.pageSize,this.myBooks);
      console.log(this.myBooks);
    })
  }

}
