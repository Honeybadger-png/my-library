import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../models/response';
import { Observable } from 'rxjs';
import { BlogDisplay } from '../models/blogDisplay';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  seasonBooksUrl: string = 'assets/season-books-data.json';
  recentBlogsUrl: string = 'assets/recent-blogs.json';

  constructor(private http : HttpClient) { }

  getSeasonBooks(): Observable<Response> {
    return this.http.get<Response>(this.seasonBooksUrl);
  }
  getRecentBlogs(): Observable<Response>{
    return this.http.get<Response>(this.recentBlogsUrl);
  }
}
