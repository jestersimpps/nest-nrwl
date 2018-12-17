import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'new-edit-dialog',
  templateUrl: './new-edit-dialog.component.html',
})

export class NewEditDialog {

  constructor(public dialogRef: MatDialogRef<NewEditDialog>){}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
