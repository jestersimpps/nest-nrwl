import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {DemoComponent} from './demo.component';
import {NxModule} from '@nrwl/nx';
import {DashboardModule} from "./dashboard/dashboard.module";
import {SharedModule} from "./shared/shared.module";
import {ProjectModule} from "./project/project.module";
import {NewProjectModule} from "./new-project/new-project.module";

@NgModule({
  declarations: [DemoComponent],
  imports: [
    BrowserModule,
    SharedModule,
    NxModule.forRoot(),
    DashboardModule,
    ProjectModule,
    NewProjectModule

  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class DemoModule {
}
