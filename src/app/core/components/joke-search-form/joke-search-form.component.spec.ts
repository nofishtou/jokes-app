import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeSearchFormComponent } from './joke-search-form.component';

describe('JokeSearchFormComponent', () => {
  let component: JokeSearchFormComponent;
  let fixture: ComponentFixture<JokeSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
