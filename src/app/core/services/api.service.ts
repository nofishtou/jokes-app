import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IJoke, JokeDTO } from '../models/joke.interface';
import { ISearchForm } from '../models/searchForm.interface';


type searchTextJokesDTO = {
  length: number,
  result: JokeDTO[]
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _jokes = new BehaviorSubject<IJoke[]>([]);
  $jokes = this._jokes.asObservable();

  constructor(private http: HttpClient) { }
  
  setJokes(jokes: IJoke[]) {
    this._jokes.next(jokes);
  } 

  getJokes(): IJoke[] {
    return this._jokes.getValue();
  }

  getJokesFromApi(searchForm: ISearchForm): Observable<IJoke[]> {
    const { searchType, searchCategory, searchText } = searchForm;

    if (searchType === 'searchText') {
      return this.getJokesWithSearchText(searchText);
    }

    if (searchType === 'category') {
      return this.getJokesFromCategory(searchCategory);
    }

    return this.getRandomJokes();
  }

  getEnabledCategories() {
    return this.http.get<string[]>(
      'https://api.chucknorris.io/jokes/categories'
    );
  }

  getRandomJokes(): Observable<IJoke[]> {
    return this.http
      .get<JokeDTO>('https://api.chucknorris.io/jokes/random')
      .pipe(
        map((jokeDTO: JokeDTO): IJoke[] => {
          const joke: IJoke = { ...jokeDTO, isFavourite: false };
          return [joke];
        })
      );
  }

  getJokesFromCategory(category: string): Observable<IJoke[]> {
    return this.http
      .get<JokeDTO>(
        `https://api.chucknorris.io/jokes/random?category=${category}`
      )
      .pipe(
        map((jokeDTO: JokeDTO): IJoke[] => {
          const joke: IJoke = { ...jokeDTO, isFavourite: false };
          return [joke];
        })
      );
  }

  getJokesWithSearchText(searchText: string): Observable<IJoke[]> {
    return this.http
      .get<searchTextJokesDTO>(
        `https://api.chucknorris.io/jokes/search?query=${searchText}`
      )
      .pipe(
        map((searchTextResult: searchTextJokesDTO) => {
          if (searchTextResult.result.length) {
            return searchTextResult.result.map((joke) => ({
              ...joke,
              isFavourite: false,
            }));
          }

          return [];
        })
      );
  }

  toggleJokeFavouriteStatus(id: string): void {
    const jokes = this.getJokes();

    const updatedJokes = jokes.map((joke: IJoke) => {
      if (joke.id === id) {
        joke.isFavourite = !joke.isFavourite;
      }

      return { ...joke };
    })

    this.setJokes(updatedJokes);
  }
}