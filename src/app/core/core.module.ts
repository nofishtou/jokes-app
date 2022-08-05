import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { JokeSearchFormComponent } from './components/joke-search-form/joke-search-form.component';
import { ButtonGroupsComponent } from './components/button-groups/button-groups.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    JokeSearchFormComponent,
    ButtonGroupsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    JokeSearchFormComponent
  ]
})
export class CoreModule { }
