import {Component} from '@angular/core';

@Component({
  selector: 'demo-root',
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row class="mat-elevation-z2" fxLayout="row" fxLayoutAlign="space-between center">
        <span>Compromis simplifié</span>
        <button mat-icon-button>
          <i class="material-icons">
            account_circle
          </i>
        </button>
      </mat-toolbar-row>
      <mat-toolbar-row class="mat-elevation-z1" routerLink="/dashboard">
        <button mat-button>
          <i class="material-icons">
            dashboard
          </i> Liste des dossiers
        </button>
        <button mat-button mat-raised-button routerLink="/new/project">
          <i class="material-icons">
            playlist_add
          </i> Nouveau dossier
        </button>
      </mat-toolbar-row>
    </mat-toolbar>
    <router-outlet></router-outlet>`,
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
}
