import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookApiUrl = "http://localhost:3001"

  constructor(private http:HttpClient) { }

  // get books that you saved for the local storage (It can be developed to get them from an database)
  getMyBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.bookApiUrl + "/books")
  }
  getSingleBook(id:string):Observable<Book>{
    return this.http.get<Book>(this.bookApiUrl+ '/books/'+id);
  }
  // Add books to Local storage (Database for later)
  addBookToLibrary(book: Book):Observable<void>{
    return this.http.post<void>(this.bookApiUrl+ '/books',book);
  }
  // Simple Delete Function
  deleteBook(id:string):Observable<void>{
    return this.http.delete<void>(this.bookApiUrl + '/books/' + id);
  }
  // probably will be used for fixing the books if it is written wrong
  updateBook(id:string , updatedBook: Book):Observable<Book>{
    return this.http.put<Book>(this.bookApiUrl + '/books' + id , updatedBook)
  }
}
