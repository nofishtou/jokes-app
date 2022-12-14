import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeComponent } from './components/joke/joke.component';
import { JokesLayoutComponent } from './components/jokes-layout/jokes-layout.component';
import { MaterialModule } from '../material/material.module';
import { IconsModule } from '../ui/icons/icons.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    JokeComponent,
    JokesLayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    IconsModule,
    SharedModule
  ],
  exports: [
    JokesLayoutComponent
  ]
})
export class JokesModule { }
