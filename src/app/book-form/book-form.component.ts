import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-form',
  imports: [],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {

  constructor(private location: Location){

  }

  goBack():void{
    this.location.back();
  }
}
