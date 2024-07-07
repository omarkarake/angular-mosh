import { Component } from '@angular/core';
import { AuthorService } from './services/author.service';
import { favoriteChangeEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  post = {
    title: 'title',
    isFavorite: true,
  };
  title = 'angular-lecture';
  authors;
  authorLength;
  constructor(author: AuthorService) {
    this.authors = author.getAuthor();
    this.authorLength = this.authors.length;
  }
  onFavoriteChange(eventArgs: favoriteChangeEventArgs) {
    console.log('Favorite changed: ', eventArgs.newValue);
  }
}
