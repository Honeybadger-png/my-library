import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../book-list/book.service';
import { Book } from '../../../models/book';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-books-table',
  imports: [RouterLink],
  templateUrl: './books-table.component.html',
  styleUrl: './books-table.component.css'
})
export class BooksTableComponent implements OnInit {
  myBooks: Book[] = [];
  testData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  currentPage = 1;
  pageSize = 10;
  pageCount = Math.ceil(this.testData.length / this.pageSize);

  currentData:number[] = [];

  constructor(private bookService:BookService){
    
  }


  ngOnInit(): void {
    this.retrieveBooks();
    this.usePagination(this.currentPage,5);
  }

  retrieveBooks() {
    this.bookService.getMyBooks().subscribe(books => {
      this.myBooks = books
    });
  }

  usePagination(currentPage:number,pageSize:number){
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize  
    this.currentData = this.testData;
    this.currentData =  this.currentData.slice(startIndex,endIndex);
    console.log(this.currentData)
  }

  nextPage(){
    this.currentPage = Math.min(this.currentPage + 1, this.pageCount )
    this.usePagination(this.currentPage,this.pageSize)
  }

  prevPage(){
    this.currentPage = Math.max(this.currentPage - 1,1);
    this.usePagination(this.currentPage,this.pageSize);
  }

}
