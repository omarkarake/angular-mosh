import { Component } from '@angular/core';
import { AuthorService } from './services/author.service';
import { favoriteChangeEventArgs } from './favorite/favorite.component';
import { liked } from './assignment-like/assignment-like.component';

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
  onLikeChange(eventArgs: liked) {
    console.log(eventArgs);
  }
}
