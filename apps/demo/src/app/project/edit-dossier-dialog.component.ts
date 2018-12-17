import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'edit-dossier-dialog',
  templateUrl: './edit-dossier-dialog.component.html',
})

export class EditDossierDialog {

  constructor(public dialogRef: MatDialogRef<EditDossierDialog>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
