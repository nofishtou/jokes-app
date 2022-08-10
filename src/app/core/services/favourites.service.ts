import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFavourite } from '../models/favourite.interface';
import { IJoke } from '../models/joke.interface';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  private _favourites = new BehaviorSubject<IFavourite[]>([]);
  favourites = this._favourites.asObservable();

  constructor() {}

  setFavourites(favourites: IFavourite[]) {
    this._favourites.next(favourites);
  }

  addFavourite(joke: IJoke) {
    if (this.isFavourite(joke.id)) {
      return;
    }

    const favourite = this.convertToFavourite(joke);
    const favourites = [...this.getFavourites()];
    this._favourites.next([...favourites, favourite]);
  }

  convertToFavourite(joke: IJoke): IFavourite {
    const { created_at, icon_url, id, updated_at, url, value } = joke;

    return {created_at, icon_url, id, updated_at, url, value};
  }

  getFavourites(): IFavourite[] {
    return this._favourites.getValue();
  }

  removeFromFavourites(id: string) {
    const favourites = this.getFavourites();

    const updatedFavourites = favourites.filter((favourite: IFavourite) => favourite.id !== id);

    this.setFavourites(updatedFavourites);
  }

  isFavourite(id: string) {
    const favourites = this.getFavourites();

    return favourites.some((favourite: IFavourite) => favourite.id === id);
  }
}
