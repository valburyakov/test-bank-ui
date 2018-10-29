import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteCreateComponent } from './suite-create.component';

describe('SuiteCreateComponent', () => {
  let component: SuiteCreateComponent;
  let fixture: ComponentFixture<SuiteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
