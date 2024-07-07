import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrl: './like.component.css',
})
export class LikeComponent {
  @Input('likeCount') likedCount: number = 0;
  @Input('isLiked') isLiked: boolean = true;
  onlikeChange() {
    this.isLiked = !this.isLiked;
    this.isLiked ? this.likedCount++ : this.likedCount--;
  }
}
