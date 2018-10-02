import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'demo-buyer-seller',
  template: `
    <div fxLayout="row" fxLayoutAlign="space-between center">
    <span>
      <button mat-mini-fab color="accent" class="mat-elevation-z0"><i class="material-icons">home</i></button> <b
      class="ml1">Vendeur</b> : Bert Wijnants
    </span>
      <span><button mat-icon-button><i class="material-icons ">arrow_right_alt</i></button> </span>
      <span>
      <button mat-mini-fab color="warn" class="mat-elevation-z0"><i
        class="material-icons ">attach_money</i></button> <b class="ml1">L’acquéreur</b> : Matthias Spaers
    </span>
    </div>
  `,
  styles: [``]
})
export class BuyerSellerComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
