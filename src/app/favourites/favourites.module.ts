import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesLayoutComponent } from './components/favourites-layout/favourites-layout.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { MaterialModule } from '../material/material.module';
import { IconsModule } from '../ui/icons/icons.module';



@NgModule({
  declarations: [
    FavouritesLayoutComponent,
    FavouriteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    IconsModule
  ],
  exports: [
    FavouritesLayoutComponent
  ]
})
export class FavouritesModule { }
