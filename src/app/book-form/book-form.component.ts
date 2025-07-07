import { Component } from '@angular/core';
import { DatePipe, Location } from '@angular/common';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-form',
  imports: [ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {

  bookForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    length: new FormControl(''),
    status: new FormControl(''),
    language: new FormControl(''),
    mainImage: new FormControl<null | File>(null, {validators: [Validators.required]}),
    addedDate : new FormControl<null | String>(null),
    updatedDate : new FormControl<null | String>(null)
  })

  constructor(private location: Location){

  }

  goBack():void{
    this.location.back();
  }

  onSubmit(){
    const now = Date.now();
    const pipe = new DatePipe("en-US");
    const formattedDate = pipe.transform(now,'short');
    this.bookForm.patchValue({addedDate:formattedDate,updatedDate:formattedDate})
    console.log(this.bookForm.value);
  }

  imageSelected(event: Event){
    const input = event.target as HTMLInputElement;
    if(input.files && input.files.length > 0){
      const file: File = input.files[0];
      this.bookForm.patchValue({mainImage: file});
    }
  }
}
