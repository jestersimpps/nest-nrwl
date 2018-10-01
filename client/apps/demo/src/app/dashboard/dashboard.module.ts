import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NxModule} from '@nrwl/nx';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoDashboardRoutingModule} from "./dashboard-routing.module";
import {DashboardComponent} from "./view/dashboard.component";
import {UiCardModule} from "../../../../../libs/ui/src/lib/ui-card/ui-card.module";
import {TodolistComponent} from "./todolist/todolist.component";
import {TodolistitemComponent} from "./todolistitem/todolistitem.component";

@NgModule({
  declarations: [
    DashboardComponent,
    TodolistComponent,
    TodolistitemComponent
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    DemoDashboardRoutingModule,
    BrowserAnimationsModule,

    UiCardModule,

  ],
  providers: [],
})
export class DemoDashboardModule {
}
