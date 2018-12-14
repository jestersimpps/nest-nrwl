import {Component, Input, OnInit} from '@angular/core';
import {HistoricalChange} from "../../models/historical-change.model";

@Component({
  selector: 'demo-document-change',
  template: `
    <mat-expansion-panel class="mat-elevation-z0" [expanded]="expanded">
      <mat-expansion-panel-header>
        <mat-panel-title>{{change?.title}}
        </mat-panel-title>
        <mat-panel-description fxLayoutAlign="end center">
          <i *ngIf="change?.changeType ===  'edit'" class="material-icons mr1">history</i>
          <i *ngIf="change?.changeType ===  'file'" class="material-icons mr1">attachment</i>
          {{change?.date | date: 'medium'}} by <b class="px1">{{change?.author}}</b>
        </mat-panel-description>
      </mat-expansion-panel-header>
      <div  fxLayout="row" fxLayoutAlign="space-between center">
        {{change?.description}}
      </div>
    </mat-expansion-panel>
  `,
  styles: [``]})
export class DocumentChangeComponent implements OnInit {

  @Input() change: HistoricalChange;
  @Input() expanded: boolean;

  constructor() {
  }

  ngOnInit() {
  }


}
