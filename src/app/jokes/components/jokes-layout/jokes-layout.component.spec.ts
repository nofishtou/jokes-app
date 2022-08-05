import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesLayoutComponent } from './jokes-layout.component';

describe('JokesLayoutComponent', () => {
  let component: JokesLayoutComponent;
  let fixture: ComponentFixture<JokesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokesLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
