import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogDisplay } from '../models/blogDisplay';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = "http://localhost:3001"
  private booksURI = "/books";
  private blogsURI = "/recent-blogs";

  constructor(private http : HttpClient) { }

  getSeasonBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl + this.booksURI);
  }
  getRecentBlogs(): Observable<BlogDisplay[]>{
    return this.http.get<BlogDisplay[]>(this.apiUrl + this.blogsURI);
  }
}
