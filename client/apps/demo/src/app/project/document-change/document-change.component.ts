import {Component, Input, OnInit} from '@angular/core';
import {HistoricalChange} from "../../../../../../../shared";

@Component({
  selector: 'demo-document-change',
  templateUrl: './document-change.component.html',
  styleUrls: ['./document-change.component.css']
})
export class DocumentChangeComponent implements OnInit {

  @Input() change: HistoricalChange;

  constructor() {
  }

  ngOnInit() {
  }


}
