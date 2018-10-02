import {Component} from '@angular/core';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material";

@Component({
  selector: 'demo-coworkers',
  template: `

    <mat-form-field class="example-chip-list" fxFill>
      <mat-chip-list #chipList>
        <mat-chip *ngFor="let fruit of fruits" [selectable]="selectable"
                  [removable]="removable" (removed)="remove(fruit)">
          {{fruit.name}}
          <mat-icon matChipRemove *ngIf="removable">cancel</mat-icon>
        </mat-chip>
        <input placeholder="Ajoute nouveau cooperateur..."
               [matChipInputFor]="chipList"
               [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
               [matChipInputAddOnBlur]="addOnBlur"
               (matChipInputTokenEnd)="add($event)">
      </mat-chip-list>
    </mat-form-field>
  `,
  styles: [``]})
export class CoworkersComponent  {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: any[] = [
    {name: 'bert.wijnants@gmail.com'},
    {name: 'matthias.spaers@gmail.com'},
    {name: 'wim.bonen@fednot.be'},
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
