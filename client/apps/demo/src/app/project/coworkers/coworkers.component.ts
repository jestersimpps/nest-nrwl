import {Component} from '@angular/core';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material";

@Component({
  selector: 'demo-coworkers',
  template: `
    <div fxFill class="pb2">
      <mat-chip-list #chipList>
        <mat-chip *ngFor="let fruit of fruits" [selectable]="selectable"
                  [removable]="removable" (removed)="remove(fruit)" [ngClass]="{'notary': fruit.role === 'notary' }">
          {{fruit.name}}
        </mat-chip>
      </mat-chip-list>
    </div>
    <div class="mr1" style="float:left">
      <div class="legendblock mr1" style="background-color: #3f51b5"></div>
      <label> Administrateur</label></div>
    <div>
      <div class="legendblock mr1" style="background-color: #e0e0e0"></div>
      <label> Participant</label></div>
  `,
  styles: [`
    .notary {
      background-color: #3f51b5;
      color: white !important;
    }

    .legendblock {
      width: 20px;
      height: 20px;
      float: left;
    }`]
})
export class CoworkersComponent {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: any[] = [
    {name: 'wim.bonen@fednot.be', role: 'notary'},
    {name: 'bert.wijnants@gmail.com', role: 'citizen'},
    {name: 'matthias.spaers@gmail.com', role: 'citizen'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

}
