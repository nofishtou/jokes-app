import { Pipe, PipeTransform } from '@angular/core';
import { DateTime, Interval } from 'luxon';

@Pipe({
  name: 'timeToHours'
})
export class TimeToHoursPipe implements PipeTransform {

  transform(value: unknown): number {
    const date = DateTime.fromJSDate(new Date(value as string));
    const now = DateTime.now();
    const hours = Math.floor(Interval.fromDateTimes(date, now).length('hours'));
    
    return hours;
  }

}
