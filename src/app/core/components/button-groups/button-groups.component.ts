import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-button-groups',
  templateUrl: './button-groups.component.html',
  styleUrls: ['./button-groups.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ButtonGroupsComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupsComponent implements ControlValueAccessor {
  selected = '';

  onChange = (selected: string) => {};
  onTouched = () => {};

  touched = false;
  disabled = false;

  constructor() {}

  @Input()
  categories: string[] = [];

  selectCategory($event: MouseEvent) {
    const domElement = $event.target as HTMLElement;
    const button = domElement.closest('.group-button') as HTMLButtonElement;
    const category = button.dataset['category'];

    this.markAsTouched();
    if (this.selected !== category) {
      this.selected = category!;
      this.onChange(this.selected);
    }
  }

  writeValue(selected: string) {
    this.selected = selected;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}
