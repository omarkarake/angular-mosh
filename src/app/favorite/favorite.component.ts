import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isSelected: boolean = false;
  constructor() {}
  ngOnInit(): void {}
  onClick() {
    this.isSelected = !this.isSelected;
  }
}
