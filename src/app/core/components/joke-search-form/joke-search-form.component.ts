import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ISearchForm } from '../../models/searchForm.interface';

@Component({
  selector: 'app-joke-search-form',
  templateUrl: './joke-search-form.component.html',
  styleUrls: ['./joke-search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JokeSearchFormComponent implements OnInit {
  searchForm!: FormGroup;
  categories: string[] = [];

  @Input()
  set categoriesInput(categoriesInput: string[]) {
    if (categoriesInput && categoriesInput.length) {
      this.categories = categoriesInput;
      this.searchForm.controls['searchCategory'].setValue(categoriesInput[0]);
    }
  }

  @Output() searchFormSubmit = new EventEmitter<ISearchForm>();

  constructor() {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchType: new FormControl('random'),
      searchCategory: new FormControl(),
      searchText: new FormControl(),
    });
  }

  handleSubmit($event: SubmitEvent) {
    $event.preventDefault();
  }

  getJokes() {
    this.searchFormSubmit.next(this.searchForm.value);
  }
}
