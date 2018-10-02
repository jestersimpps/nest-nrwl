import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'demo-document-edit',
  templateUrl: './document-edit.component.html',
  styles: [`
    .downloadcard {
      background: #e0e0e0;
    }`]
})
export class DocumentEditComponent {

  form = new FormGroup({});

  submit() {
    if (this.form.valid) {
      console.log(this.form)
    }
  }
}
