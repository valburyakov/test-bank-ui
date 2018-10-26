import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-case-details',
  templateUrl: './test-case-details.component.html',
  styleUrls: ['./test-case-details.component.scss']
})
export class TestCaseDetailsComponent implements OnInit {

  private testCase = {};

  constructor(private  apiService:  ApiService, private route: ActivatedRoute) { }

    ngOnInit() {
    this.getTestCase();
  }

  public getTestCase(){
    const caseId = + this.route.snapshot.paramMap.get('caseId');
    this.apiService.getTestCase(caseId).subscribe((data:  Object) => {
      console.log(data);
      this.testCase  =  data;
    })

  }
}
