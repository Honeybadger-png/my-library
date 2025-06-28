import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from './book.service';
import { BookFormComponent } from '../book-form/book-form.component';
@Component({
  selector: 'app-book-list',
  imports: [BookFormComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  myBooks: Book[] = [];

  constructor(private bookService:BookService){

  }
  ngOnInit(): void {
    this.retrieveBooks();
  }

  retrieveBooks(){
    this.bookService.getMyBooks().subscribe(books => {
      this.myBooks = books
    });
  }

}
