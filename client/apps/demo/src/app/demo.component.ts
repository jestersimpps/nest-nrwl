import {Component} from '@angular/core';

@Component({
  selector: 'demo-root',
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row class="mat-elevation-z2" fxLayout="row" fxLayoutAlign="space-between center">
        <span>Compromis simplifié</span>
        <div>
          <small>Wim Bonen</small>
          <button mat-icon-button>
            <i class="material-icons">
              account_circle
            </i>
          </button>
        </div>
      </mat-toolbar-row>
      <mat-toolbar-row class="mat-elevation-z1">
        <div class="sm-col-12 md-col-10 mx-auto">
          <button mat-button routerLink="/dashboard">
            <i class="material-icons">
              dashboard
            </i> Liste des dossiers
          </button>
          <button mat-button mat-raised-button routerLink="/new/project">
            <i class="material-icons">
              playlist_add
            </i> Nouveau dossier
          </button>
        </div>
      </mat-toolbar-row>
    </mat-toolbar>
    <router-outlet></router-outlet>`,
  styles: [``]
})
export class DemoComponent {
}
