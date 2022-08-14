import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeToHoursPipe } from './pipes/time-to-hours.pipe';



@NgModule({
  declarations: [
    TimeToHoursPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimeToHoursPipe
  ]
})
export class SharedModule { }
