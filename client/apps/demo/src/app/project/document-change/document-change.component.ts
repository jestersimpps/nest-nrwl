import {Component, Input, OnInit} from '@angular/core';
import {HistoricalChange} from "../../models/historical-change.model";

@Component({
  selector: 'demo-document-change',
  template: `
    <mat-expansion-panel class="mat-elevation-z0" [expanded]="expanded">
      <mat-expansion-panel-header>
        <mat-panel-title>
          <i *ngIf="change?.changeType ===  'edit'" class="material-icons mr1">edit</i>
          <i *ngIf="change?.changeType ===  'file'" class="material-icons mr1">attachment</i>
          <i *ngIf="change?.changeType ===  'delete'" class="material-icons mr1">delete</i>
          {{change?.date | date: 'medium'}} by <span class="px1">{{change?.author}}</span>
        </mat-panel-title>
        <mat-panel-description fxLayoutAlign="end center">
         <b> {{change?.title}}</b>
        </mat-panel-description>
      </mat-expansion-panel-header>
      <div>
        {{change?.description}}
        <div *ngIf="change?.changeType ===  'edit'" class="mt1">
          <button mat-flat-button>
            <i class="material-icons mr1">open_in_browser</i>
            Ouvir version de  {{change?.date | date: 'medium'}}</button>
        </div>
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
