import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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

  currentSeasonBooks = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    }
  ]

}
