import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-assignment-like',
  templateUrl: './assignment-like.component.html',
  styleUrl: './assignment-like.component.css',
})
export class AssignmentLikeComponent {
  like: number = 0;
  @Input('isLikeSelected') isSelected: boolean = false;
  @Output('likeChangedLog') click = new EventEmitter();

  onLikeClick() {
    this.isSelected = !this.isSelected;
    this.like === 0 ? (this.like = this.like + 1) : (this.like = this.like - 1);
    this.click.emit({ likeValue: !this.isSelected ? 'liked' : 'disliked' });
  }
}

export interface liked {
  likedValue: 'string';
}
