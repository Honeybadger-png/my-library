import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../models/response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url: string = 'assets/season-books-data.json';

  constructor(private http : HttpClient) { }

  getSeasonBooks(): Observable<Response> {
    return this.http.get<Response>(this.url)
  }
}
