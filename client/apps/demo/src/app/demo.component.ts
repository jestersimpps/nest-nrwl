import {Component} from '@angular/core';

@Component({
  selector: 'demo-root',
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row class="mat-elevation-z2" fxLayout="row" fxLayoutAlign="space-between center">
        <span>Naban search demo</span>
        <button mat-icon-button>
          <i class="material-icons">
            account_circle
          </i>
        </button>
      </mat-toolbar-row>
      <mat-toolbar-row class="mat-elevation-z1">
        <div class="sm-col-12 md-col-10 mx-auto">
          <mat-form-field floatPlaceholder="never" color="white" fxFill>
            <mat-icon matPrefix>search</mat-icon>
            <input matInput
                   type="search"
                   #term
                   >
          </mat-form-field>

        </div>
      </mat-toolbar-row>
    </mat-toolbar>
    <router-outlet></router-outlet>`,
  styles: [``]
})
export class DemoComponent {
}
