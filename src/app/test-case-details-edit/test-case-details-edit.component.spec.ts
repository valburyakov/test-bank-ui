import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCaseDetailsEditComponent } from './test-case-details-component-edit.component';

describe('TestCaseDetailsComponentEditComponent', () => {
  let component: TestCaseDetailsEditComponent;
  let fixture: ComponentFixture<TestCaseDetailsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCaseDetailsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCaseDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
