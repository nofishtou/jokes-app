import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IFavourite } from 'src/app/core/models/favourite.interface';
import { FavouritesService } from 'src/app/core/services/favourites.service';

@Component({
  selector: 'app-favourites-layout',
  templateUrl: './favourites-layout.component.html',
  styleUrls: ['./favourites-layout.component.scss'],
})
export class FavouritesLayoutComponent implements OnInit {
  $favourites!: Observable<IFavourite[]>; 

  constructor(private favouritesService: FavouritesService) { }

  ngOnInit(): void {
    this.$favourites = this.favouritesService.favourites;
  }

  identify(favourite: IFavourite) {
    return favourite.id;
  }
}
