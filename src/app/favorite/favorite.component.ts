import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isSelected: boolean = false;
  @Output() change = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit();
  }
}
