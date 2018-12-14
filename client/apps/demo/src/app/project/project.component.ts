import {Component, OnInit} from '@angular/core';
import {Changes} from "./document-change-list/document-change-list.component";

@Component({
  selector: 'demo-project',
  templateUrl: './project.component.html',
  styles: [`
    :host ::ng-deep .fr-toolbar{
      border-top:0px !important;
    }
  `]
})
export class ProjectComponent implements OnInit {
  changes = Changes;
  expandChanges = false;
  constructor() {
  }

  ngOnInit() {
  }

}
