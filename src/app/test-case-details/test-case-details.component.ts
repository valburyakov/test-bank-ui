import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Testcase } from '../../models/testcase';

@Component({
  selector: 'app-test-case-details',
  templateUrl: './test-case-details.component.html',
  styleUrls: ['./test-case-details.component.scss']
})

export class TestCaseDetailsComponent implements OnInit {
  testcasemodel;

  constructor(private  apiService:  ApiService, private route: ActivatedRoute) { }
    ngOnInit() {
    this.getTestCase();
  }

  public getTestCase() {
    const caseId = + this.route.snapshot.paramMap.get('caseId');
    this.apiService.getTestCase(caseId).subscribe((data:  Testcase) => {
      console.log(data);
      // this.testCase  =  data;
      this.testcasemodel = new Testcase(data.id, data.name, data.status, data.description, data.labels, data.steps);
      console.log('model: ' + this.testcasemodel);
    });

  }
}
