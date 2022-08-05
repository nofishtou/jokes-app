import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-favourites-layout',
  templateUrl: './favourites-layout.component.html',
  styleUrls: ['./favourites-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavouritesLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
