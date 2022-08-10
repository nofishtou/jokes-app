import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IJoke } from 'src/app/core/models/joke.interface';
import { ApiService } from 'src/app/core/services/api.service';
import { FavouritesService } from 'src/app/core/services/favourites.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JokeComponent {
  @Input() joke!: IJoke;

  constructor(
    private favouritesService: FavouritesService,
    private apiService: ApiService
  ) { }

  toggleFavouriteStatus(joke: IJoke) {
    const isFavourite = this.favouritesService.isFavourite(joke.id);

    if (isFavourite) {
      this.favouritesService.removeFromFavourites(joke.id)
    } else {
      this.favouritesService.addFavourite(joke);
    }
    
    this.apiService.toggleJokeFavouriteStatus(joke.id);
  }
}
