import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ISearchForm } from 'src/app/core/models/searchForm.interface';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  @Input() categories!: string[];

  @Output() searchFormSubmit = new EventEmitter<ISearchForm>();

  constructor() {}

  searchFormSubmitHandler(searchFormValue: ISearchForm) {
    this.searchFormSubmit.next(searchFormValue);
  }
}
