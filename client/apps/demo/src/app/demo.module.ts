import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {DemoComponent} from './demo.component';
import {NxModule} from '@nrwl/nx';
import {DashboardModule} from "./dashboard/dashboard.module";
import {SharedModule} from "./shared/shared.module";
import {NewProjectComponent} from './new-project/new-project.component';
import {ProjectModule} from "./project/project.module";

@NgModule({
  declarations: [DemoComponent, NewProjectComponent,],
  imports: [
    BrowserModule,
    SharedModule,
    NxModule.forRoot(),
    DashboardModule,
    ProjectModule,

  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class DemoModule {
}
