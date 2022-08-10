import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IJoke } from 'src/app/core/models/joke.interface';
import { ISearchForm } from 'src/app/core/models/searchForm.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  @Input() categories!: string[];
  @Input() jokes!: IJoke[];

  @Output() searchFormSubmit = new EventEmitter<ISearchForm>();

  constructor() {}

  searchFormSubmitHandler($event: ISearchForm) {
    this.searchFormSubmit.next($event);
  }
}
