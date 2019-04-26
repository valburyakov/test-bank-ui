import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Testcase } from '@models/testcase';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, startWith, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ReviewModel } from '@models/review.model';

@Component({
  selector: 'app-test-case-details-edit',
  templateUrl: './test-case-details-edit.component.html',
  styleUrls: ['./test-case-details-edit.component.scss']
})
export class TestCaseDetailsEditComponent implements OnInit {
  testcasemodel: Testcase;
  labelList = [];
  projectId: number;
  errorMessage: string;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  labelCtrl = new FormControl();
  filteredLabels$: Observable<string[]>;

  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  @ViewChild('labelInput') labelInput: ElementRef<HTMLInputElement>;

  onSubmit() {
    console.log(this.testcasemodel);

    const apiCall: Observable<Testcase | ReviewModel> = this.testcasemodel && this.testcasemodel.id
      ? this.apiService.updateTestCase(this.testcasemodel)
      : this.apiService.addTestCase(this.testcasemodel, this.projectId);

    apiCall.subscribe(
      res => {
        console.log(res);
        // Navigate to newly created test case
        this.router.navigate(['/cases', this.testcasemodel.id || res.id]);
      }, err => this.errorMessage = err.error.message || 'Error occurred during posting test case'
    );
  }


  constructor(private apiService: ApiService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTestCase();

    this.filteredLabels$ = this.labelCtrl.valueChanges.pipe(
      startWith(null),
      map((label: string | null) => label ? this._filter(label) : this.labelList.slice()));
  }

  public getTestCase() {
    const caseId = this.route.snapshot.paramMap.get('caseId');

    // create empty test case
    if (caseId === 'new') {
      if (this.route.snapshot.queryParamMap.has('projectId')) {
        this.projectId = +this.route.snapshot.queryParamMap.get('projectId');
        this.testcasemodel = new Testcase({
          labels: ['api'],
          changedBy: 'Test User',
          reference: '',
          title: '',
          steps: []
        });
        this.getLabelList();
        return;
      }

      this.errorMessage = 'Need to provide project Id to add new test case';
      return;
    }
    this.apiService.getTestCase(caseId).subscribe((data: Testcase) => {
      // TODO Need to load label list from test case project
      // this.getLabelList(data.projectId);
      this.testcasemodel = new Testcase(data);
    });

  }

  getLabelList() {
    this.apiService.getLabels(this.projectId).subscribe(labels => this.labelList = labels);
  }


  add(event: MatChipInputEvent): void {
    // Add only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim() && !this.testcasemodel.labels.includes(value)) {
        this.testcasemodel.labels.push(value.trim());
        this.labelList.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.labelCtrl.setValue(null);
    }
  }

  remove(label: string): void {
    this.testcasemodel.labels = this.testcasemodel.labels.filter(f => f !== label);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.viewValue;
    if (!this.testcasemodel.labels.includes(value)) {
      this.testcasemodel.labels.push(value);
    }
    this.labelInput.nativeElement.value = '';
    this.labelCtrl.setValue(null);
}

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.labelList.filter(label => label.toLowerCase().indexOf(filterValue) === 0);
  }

  addStep() {
    this.testcasemodel.steps.push('');
  }
}
