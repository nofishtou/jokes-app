import { TimeToHoursPipe } from './time-to-hours.pipe';

describe('TimeToHoursPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeToHoursPipe();
    expect(pipe).toBeTruthy();
  });
});
