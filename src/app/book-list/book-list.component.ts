import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from './book.service';
import { RouterLink } from '@angular/router';
import { Choice as TableChoice } from '../models/listChoice';
@Component({
  selector: 'app-book-list',
  imports: [RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  TableChoice = TableChoice;
  tableChoice = TableChoice.list;



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

  setChoice(choice: TableChoice){
    console.log(choice);
    this.tableChoice = choice;
  }

}
