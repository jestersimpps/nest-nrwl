import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'demo-projectlistitem',
  template: `
    <mat-expansion-panel class="mat-elevation-z0">
      <mat-expansion-panel-header>
        <mat-panel-title>
          <i class="material-icons mr3">work</i>Square de Noville 3, 1081 KOEKELBERG
        </mat-panel-title>
        <mat-panel-description>
          <i class="material-icons mr1">history</i>Last updated: 01/10/2018 by eric@fednot.be
        </mat-panel-description>
      </mat-expansion-panel-header>
      <div class="container" fxLayout="row" fxLayoutAlign="space-between center">
        <demo-buyer-seller></demo-buyer-seller>
        <button mat-flat-button routerLink="/projects/1"><i class="material-icons mr1">
          folder_open
        </i>
          Ouvrir
        </button>
      </div>
    </mat-expansion-panel>
  `,
  styles: [``]
})
export class ProjectListItemComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
