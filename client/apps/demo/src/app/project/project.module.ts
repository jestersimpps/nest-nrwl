import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentChangeComponent} from "./document-change/document-change.component";
import {ProjectComponent} from "./project.component";
import {SharedModule} from "../shared/shared.module";
import {DocumentEditComponent} from "./document-edit/document-edit.component";
import {CoworkersComponent} from "./coworkers/coworkers.component";
import {DocumentChangeListComponent} from "./document-change-list/document-change-list.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ProjectComponent,
    DocumentChangeComponent,
    DocumentEditComponent,
    CoworkersComponent,
    DocumentChangeListComponent],
  exports: [ProjectComponent]
})
export class ProjectModule {
}
