import { Component, OnInit } from '@angular/core';
import { BooksTableComponent } from '../shared/components/books-table/books-table.component';
import { RouterLink } from '@angular/router';
import { Choice as TableChoice } from '../models/listChoice';
@Component({
  selector: 'app-book-list',
  imports: [RouterLink,BooksTableComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  TableChoice = TableChoice;
  tableChoice = TableChoice.list;


  constructor(){

  }
  ngOnInit(): void {

  }


  setChoice(choice: TableChoice){
    console.log(choice);
    this.tableChoice = choice;
  }

}
