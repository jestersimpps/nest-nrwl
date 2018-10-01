import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentChangeComponent } from './document-change.component';

describe('DocumentChangeComponent', () => {
  let component: DocumentChangeComponent;
  let fixture: ComponentFixture<DocumentChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
