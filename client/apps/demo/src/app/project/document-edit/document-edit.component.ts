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

  documents = [
    {
      title: 'Certificat PEB',
      fileName: 'PEB_Cert_1234.pdf',
    }, {
      title: 'controle installation éctrique',
      fileName: 'EL_2018_05.pdf',
    }, {
      title: 'renseignements urbanistiques',
      fileName: 'PbRen_04A.pdf',
    },
  ]

  submit() {
    if (this.form.valid) {
      console.log(this.form)
    }
  }
}
