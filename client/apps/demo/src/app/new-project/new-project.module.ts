import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {NewProjectComponent} from "./new-project.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    NewProjectComponent],
  exports: [NewProjectComponent]
})
export class NewProjectModule {
}
