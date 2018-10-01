import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatMenuModule,
  MatToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DemoRoutingModule} from "../demo-routing.module";
import {BuyerSellerComponent} from "./buyer-seller/buyer-seller.component";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    DemoRoutingModule,

  ],
  declarations: [BuyerSellerComponent],
  exports: [
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    DemoRoutingModule,
    BuyerSellerComponent
  ]
})
export class SharedModule {
}
