import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NxModule} from '@nrwl/nx';
import {DashboardComponent} from "./dashboard.component";
import {ProjectListComponent} from "./project-list/project-list.component";
import {ProjectListItemComponent} from "./project-list-item/project-list-item.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    DashboardComponent,
    ProjectListComponent,
    ProjectListItemComponent,

  ],
  imports: [
    SharedModule,
    BrowserModule,
    NxModule.forRoot(),

  ],
  providers: [],
})
export class DashboardModule {
}
