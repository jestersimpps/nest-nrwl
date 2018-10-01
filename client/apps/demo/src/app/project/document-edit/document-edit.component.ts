import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'demo-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent {

  form = new FormGroup({});
  submit() {
    if (this.form.valid) {
    }
  }
}
