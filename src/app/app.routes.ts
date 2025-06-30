import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';

export const routes: Routes = [
    {path: "", component: BookListComponent},
    {path: "books", component:BookFormComponent}
];
