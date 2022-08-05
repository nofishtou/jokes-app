import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesLayoutComponent } from './favourites-layout.component';

describe('FavouritesLayoutComponent', () => {
  let component: FavouritesLayoutComponent;
  let fixture: ComponentFixture<FavouritesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouritesLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
