import {Component, OnInit} from '@angular/core';

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
  expandChanges = false;
  constructor() {
  }

  ngOnInit() {
  }

}
