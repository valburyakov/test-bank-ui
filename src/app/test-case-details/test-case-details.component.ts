import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Testcase } from '../../models/testcase';
import { DIFF2HTML_TOKEN } from '../services/diff2html.token';

@Component({
  selector: 'app-test-case-details',
  templateUrl: './test-case-details.component.html',
  styleUrls: ['./test-case-details.component.scss']
})

export class TestCaseDetailsComponent implements OnInit {
  testCase: Object;
  diff: Object;
  outputHtml: string;

  constructor(private  apiService:  ApiService, private route: ActivatedRoute, @Inject(DIFF2HTML_TOKEN) private diff2Html: Diff2Html.Diff2Html) { }
    ngOnInit() {
    this.getTestCase();
  }

  public getTestCase() {
    const caseId = + this.route.snapshot.paramMap.get('caseId');
    this.apiService.getTestCase(caseId).subscribe((data) => {
      this.testCase  =  data;
      let diff = data["diff"].unifiedDiff

      let outputHtml = this.diff2Html.getPrettyHtml(diff, {inputFormat: 'diff', outputFormat: "side-by-side" });
      this.outputHtml = outputHtml;
    });
  }
}
