import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { StarRatingComponent } from '../../star-rating/star-rating.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-books-carousel',
  imports: [StarRatingComponent,NgStyle],
  templateUrl: './books-carousel.component.html',
  styleUrl: './books-carousel.component.css'
})
export class BooksCarouselComponent implements AfterViewInit{
  @Input() currentSeasonBooks: any[] = [];
  @ViewChild('innerSlide') innerSlide!: ElementRef;
  @ViewChild('outerSlide') outerSlide!: ElementRef;
  canSlideLeft = false;
  canSlideRight = false;

  offset:number = 0;
  slideStep:number = 200; // amount to scroll per click
  maxOffset:number = 0;

  ngAfterViewInit(): void {
    // Optional: log dimensions
    setTimeout(() => {
      const firstSlide = this.innerSlide.nativeElement.querySelector('div');
      if(firstSlide){
        this.slideStep = firstSlide.clientWidth + 8;
      }

      this.updateSlideControls();
    },250);
  }

  updateSlideControls(){
    const inner = this.innerSlide.nativeElement;
    const outer = this.outerSlide.nativeElement;

    const innerWidth = inner.scrollWidth;
    const outerWidth = outer.offsetWidth;
    const maxOffset = outerWidth - innerWidth;
    
    this.canSlideLeft = this.offset < 0;
    this.canSlideRight = this.offset > maxOffset;
  }


  slideLeft(): void {
    this.offset = Math.min(this.offset + this.slideStep, 0);
    
    this.updateSlideControls();
  }

  slideRight(): void {
    const innerWidth = this.innerSlide.nativeElement.scrollWidth;
    const outerWidth = this.outerSlide.nativeElement.offsetWidth;
    const maxSlide = outerWidth - innerWidth;
    
    this.offset = Math.max(this.offset - this.slideStep, maxSlide);

    this.updateSlideControls();
  }

}
