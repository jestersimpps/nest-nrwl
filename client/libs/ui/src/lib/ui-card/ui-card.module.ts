import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material";
import { UiCardComponent } from './ui-card.component';

@NgModule({
  imports: [
    MatCardModule,
    CommonModule
  ],
  declarations: [UiCardComponent],
  exports:[UiCardComponent]
})
export class UiCardModule { }
