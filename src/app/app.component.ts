import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { IJoke } from './core/models/joke.interface';
import { ISearchForm } from './core/models/searchForm.interface';
import { ApiService } from './core/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'chuck-norris-jokes';
  private unsubscriber: Subject<void> = new Subject<void>();
  categories!: string[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService
      .getEnabledCategories()
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((categories: string[]) => {
        this.categories = categories;
      });
  }

  searchFormSubmitHandler(searchFormValue: ISearchForm) {
    this.apiService
      .getJokesFromApi(searchFormValue)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((jokes: IJoke[]) => {
        this.apiService.setJokes(jokes);
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
