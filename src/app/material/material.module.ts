import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatInputModule
  ]
})
export class MaterialModule { }
