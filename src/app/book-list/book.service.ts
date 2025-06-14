import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }


  // Need to get books from an API but Its not necessary in the early stage of development
  getBooks(){

  }
  // get books that you saved for the local storage (It can be developed to get them from an database)
  getMyBooks(){

  }
  // Add books to Local storage (Database for later)
  addBookToLibrary(){

  }
  // Simple Delete Function
  deleteBook(){

  }
  // probably will be used for fixing the books if it is written wrong
  updateBook(){

  }
}
