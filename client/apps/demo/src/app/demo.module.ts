import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {DemoComponent} from './demo.component';
import {NxModule} from '@nrwl/nx';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoRoutingModule} from "./demo-routing.module";
import {DemoDashboardModule} from "./dashboard/dashboard.module";
import {MatButtonModule, MatMenuModule, MatToolbarModule} from "@angular/material";

@NgModule({
  declarations: [DemoComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    DemoRoutingModule,
    DemoDashboardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
