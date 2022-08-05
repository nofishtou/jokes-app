import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FavouritesModule } from 'src/app/favourites/favourites.module';
import { JokesModule } from 'src/app/jokes/jokes.module';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FavouritesModule,
    JokesModule,
    CoreModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
