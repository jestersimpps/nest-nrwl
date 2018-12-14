import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentChangeComponent} from "./document-change/document-change.component";
import {ProjectComponent} from "./project.component";
import {SharedModule} from "../shared/shared.module";
import {DocumentEditComponent} from "./document-edit/document-edit.component";
import {CoworkersComponent} from "./coworkers/coworkers.component";
import {DocumentChangeListComponent} from "./document-change-list/document-change-list.component";
import {FroalaEditorModule, FroalaViewModule} from "angular-froala-wysiwyg";
import {NewEditDialog} from "./new-edit-dialog.component";
import {EditDossierDialog} from "./edit-dossier-dialog.component";
import {EditCoWorkersDialog} from "./edit-coworkers-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  declarations: [
    ProjectComponent,
    DocumentChangeComponent,
    DocumentEditComponent,
    CoworkersComponent,
    DocumentChangeListComponent,
    NewEditDialog,
    EditDossierDialog,
    EditCoWorkersDialog
  ],
  entryComponents: [
    NewEditDialog,
    EditDossierDialog,
    EditCoWorkersDialog
  ],
  exports: [ProjectComponent]
})
export class ProjectModule {
}
