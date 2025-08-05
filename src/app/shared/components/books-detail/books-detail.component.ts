import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books-detail',
  imports: [],
  templateUrl: './books-detail.component.html',
  styleUrl: './books-detail.component.css'
})
export class BooksDetailComponent implements OnInit {
  bookId = signal('');
  private route = inject(ActivatedRoute)

  ngOnInit(): void {
    console.log(this.route.params.subscribe((params)=> {
      this.bookId.set(params['id']);
    }));
  }

}
