import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-joke-search-form',
  templateUrl: './joke-search-form.component.html',
  styleUrls: ['./joke-search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JokeSearchFormComponent implements OnInit {
  searchForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchType: new FormControl('random'),
      searchCategory: new FormControl(),
      searchText: new FormControl()
    });

    this.searchForm.valueChanges.subscribe((data) => console.log(data));
  }

  handleSubmit($event: SubmitEvent) {
    $event.preventDefault();
  }
}
