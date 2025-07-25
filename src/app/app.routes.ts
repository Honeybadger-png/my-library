import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "my-library", component: BookListComponent},
    {path: "books", component:BookFormComponent}
];
