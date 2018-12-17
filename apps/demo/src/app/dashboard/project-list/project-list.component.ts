import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'demo-projectlist',
  template: `

    <mat-card class=" my1 mx1">
      <mat-card-title>Mes Dossiers</mat-card-title>
      <demo-projectlistitem></demo-projectlistitem>
      <demo-projectlistitem></demo-projectlistitem>

    </mat-card>
    <mat-card class=" my1 mx1">
      <mat-card-title>Invitations</mat-card-title>
      <demo-projectlistitem></demo-projectlistitem>
      <demo-projectlistitem></demo-projectlistitem>
      <demo-projectlistitem></demo-projectlistitem>
      <demo-projectlistitem></demo-projectlistitem>
      <demo-projectlistitem></demo-projectlistitem>

    </mat-card>
  `,
  styles: [``]
})
export class ProjectListComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
