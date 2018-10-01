import {Component} from '@angular/core';

@Component({
  selector: 'demo-root',
  template: `
    <mat-toolbar fxLayout="row">
      <button mat-button>
        <i class="material-icons">
          dashboard
        </i> Todo Overview
      </button>
      <button mat-button>
        <i class="material-icons">
          playlist_add
        </i> New Todo
      </button>
      <button mat-button fxLayoutAlign="center end">
        <i class="material-icons">
          account_circle
        </i> User
      </button>
    </mat-toolbar>
    <router-outlet></router-outlet>`,
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
}
