import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IFavourite } from 'src/app/core/models/favourite.interface';
import { ApiService } from 'src/app/core/services/api.service';
import { FavouritesService } from 'src/app/core/services/favourites.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavouriteComponent {
  @Input() favourite!: IFavourite;

  constructor(private favouritesService: FavouritesService, private apiService: ApiService) { }

  removeFromFavourites(favourite: IFavourite) {
    this.favouritesService.removeFromFavourites(favourite.id);
    this.apiService.toggleJokeFavouriteStatus(favourite.id)
  }
}
