import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'edit-coworkers-dialog',
  templateUrl: './edit-coworkers-dialog.component.html',
})

export class EditCoWorkersDialog {

  constructor(public dialogRef: MatDialogRef<EditCoWorkersDialog>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
