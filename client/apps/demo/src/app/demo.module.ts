import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {DemoComponent} from './demo.component';
import {NxModule} from '@nrwl/nx';
import {DemoDashboardModule} from "./dashboard/dashboard.module";
import {ProjectComponent} from './project/project.component';
import {SharedModule} from "./shared/shared.module";
import {NewProjectComponent} from './new-project/new-project.component';

@NgModule({
  declarations: [DemoComponent, ProjectComponent, NewProjectComponent, ],
  imports: [
    BrowserModule,
    SharedModule,
    NxModule.forRoot(),
    DemoDashboardModule,
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class DemoModule {
}
