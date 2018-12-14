import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule, MatIconModule, MatInputModule, MatListModule,
  MatMenuModule, MatRadioModule, MatSlideToggleModule, MatTabsModule,
  MatToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DemoRoutingModule} from "../demo-routing.module";
import {BuyerSellerComponent} from "./buyer-seller/buyer-seller.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,

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
    BuyerSellerComponent,
    MatChipsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSlideToggleModule,
    FormsModule,
    MatTabsModule
  ]
})
export class SharedModule {
}
