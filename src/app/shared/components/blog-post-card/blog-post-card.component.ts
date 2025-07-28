import { Component, Input } from '@angular/core';
import { BlogDisplay } from '../../../models/blogDisplay';

@Component({
  selector: 'app-blog-post-card',
  imports: [],
  templateUrl: './blog-post-card.component.html',
  styleUrl: './blog-post-card.component.css'
})
export class BlogPostCardComponent {
  @Input() blogPosts?:BlogDisplay[] ;

}
