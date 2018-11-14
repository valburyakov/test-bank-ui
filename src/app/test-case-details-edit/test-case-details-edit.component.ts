import { Component, OnInit } from '@angular/core';
import { Testcase } from '../../models/testcase';
import {ApiService} from '../api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-test-case-details-edit',
  templateUrl: './test-case-details-edit.component.html',
  styleUrls: ['./test-case-details-edit.component.scss']
})
export class TestCaseDetailsEditComponent implements OnInit {
  testcasemodel;
  submitted = false;
  statuses = ['new', 'tested', 'not tested', 'in progress'];

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.testcasemodel); }

  constructor(private  apiService:  ApiService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.getTestCase();
  }

  public getTestCase() {
    const caseId = + this.route.snapshot.paramMap.get('caseId');
    this.apiService.getTestCase(caseId).subscribe((data:  Testcase) => {
      this.testcasemodel = new Testcase(data.id, data.name, data.status, data.description, data.labels, data.steps);
      console.log('model: ' + this.testcasemodel);
    });

  }
  public newTestcase() {
    this.testcasemodel = new Testcase(this.testcasemodel.id, '', '', '');
  }
  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] &&
      form.controls['name'].value;
  }

}
