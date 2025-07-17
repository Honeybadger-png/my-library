import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/response';



@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  url: string = 'assets/season-books-data.json';
  currentSeasonBooks: any[] = [];
  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.http.get<Response>(this.url).subscribe(res => {
      this.currentSeasonBooks = res.seasonBooks;
      console.log(JSON.stringify(res.seasonBooks));
    })
  }

  newBlogs = [
    {
      id : 1
    },
    {
      id : 2
    },
    {
      id : 3
    },
    {
      id : 4
    },
  ];


}
