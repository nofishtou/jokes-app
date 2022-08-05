import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavouriteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
