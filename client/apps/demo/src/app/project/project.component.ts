import {Component, OnInit} from '@angular/core';
import {Changes} from "./document-change-list/document-change-list.component";
import {MatDialog} from "@angular/material";
import {NewEditDialog} from "./new-edit-dialog.component";
import {EditDossierDialog} from "./edit-dossier-dialog.component";
import {EditCoWorkersDialog} from "./edit-coworkers-dialog.component";

@Component({
  selector: 'demo-project',
  templateUrl: './project.component.html',
  styles: [`
    :host ::ng-deep .fr-toolbar {
      border-top: 0px !important;
    }
  `]
})
export class ProjectComponent implements OnInit {
  changes = Changes;
  expandChanges = false;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openEditDialog(): void {
    this.dialog.open(NewEditDialog, {
      width: '800px'
    });
  }

  openDossierDialog(): void {
    this.dialog.open(EditDossierDialog, {
      width: '800px'
    });
  }

  openCoWorkersrDialog(): void {
    this.dialog.open(EditCoWorkersDialog, {
      width: '800px',
      data: {
        fruits: [
          {name: 'bert.wijnants@gmail.com'},
          {name: 'matthias.spaers@gmail.com'},
          {name: 'wim.bonen@fednot.be'},
        ]
      }
    });
  }
}

