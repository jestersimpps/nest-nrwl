import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentChangeListComponent } from './document-change-list.component';

describe('DocumentChangeListComponent', () => {
  let component: DocumentChangeListComponent;
  let fixture: ComponentFixture<DocumentChangeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentChangeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentChangeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
