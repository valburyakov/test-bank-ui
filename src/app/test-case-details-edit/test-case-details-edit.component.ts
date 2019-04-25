import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Testcase } from '@models/testcase';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-case-details-edit',
  templateUrl: './test-case-details-edit.component.html',
  styleUrls: ['./test-case-details-edit.component.scss']
})
export class TestCaseDetailsEditComponent implements OnInit {
  testcasemodel: Testcase;
  submitted = false;
  statuses = ['new', 'tested', 'not tested', 'in progress'];
  labelList = ['smoke', 'api', 'automated', 'manual'];
  projectId = -1; // TODO get project from router params ?

  @ViewChild('labelInput') labelInput: ElementRef<HTMLInputElement>;

  onSubmit() {
    // TODO call service to create or update test case;
    // his.apiService.upsertTestCase(this.testcasemodel, this.projectId);
    this.submitted = true;
  }


  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTestCase();
  }

  public getTestCase() {
    const caseId = this.route.snapshot.paramMap.get('caseId');

    // create empty test case
    if (caseId === 'new') {
      if (this.route.snapshot.queryParamMap.has('projectId')) {
        this.projectId = +this.route.snapshot.queryParamMap.get('projectId');
        this.testcasemodel = new Testcase(null, '', 'new', '', [], ['api']);
        return;
      }

      throw Error('Need provide project Id to add new test case');
    }
    this.apiService.getTestCase(caseId).subscribe((data:  Testcase) => {
      this.testcasemodel = new Testcase(data.id, data.title, data.status, data.description, {}, data.labels, data.steps);
    });

  }

  addLabel(value: string) {
    const newLabel = (value || '').trim();
    if ( newLabel && !this.labelList.includes(newLabel)) {
      this.labelList.push(newLabel);
      this.labelInput.nativeElement.value = '';
    }
  }
}
