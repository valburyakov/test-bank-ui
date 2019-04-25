import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Testcase } from '../../models/testcase';
import { DIFF2HTML_TOKEN } from '../services/diff2html.token';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-test-case-details',
  templateUrl: './test-case-details.component.html',
  styleUrls: ['./test-case-details.component.scss']
})

export class TestCaseDetailsComponent implements OnInit {
  private testCase: Object;
  private outputHtml: Object;

  constructor(private  apiService:  ApiService, 
    private route: ActivatedRoute, 
    @Inject(DIFF2HTML_TOKEN) private diff2Html: Diff2Html.Diff2Html,
    private router: Router,
    private loadingService: LoadingService) { }
    ngOnInit() {
    this.getTestCase();
  }

  public getTestCase() {
    const caseId = + this.route.snapshot.paramMap.get('caseId');
    this.apiService.getTestCase(caseId).subscribe((data) => {
      this.testCase  =  data;
      
      let diff = data["reviewList"][0].diff

      let outputHtml = this.diff2Html.getPrettyHtml(diff, {inputFormat: 'diff', outputFormat: "side-by-side" });
      this.outputHtml = outputHtml;
    });
  }

  public requestReview(){
    const caseId = + this.route.snapshot.paramMap.get('caseId');
    this.loadingService.showSpinner();
    this.apiService.requestReview(caseId, {"email": "spirogov", "name": "spirogov"})
                  .pipe(finalize(() => this.loadingService.hideSpinner()))
                  .subscribe((data) => {
                      this.getTestCase();
                  });
  }

  public merge(pullRequestId: number){
    this.loadingService.showSpinner();
    this.apiService.merge(pullRequestId)
                  .pipe(finalize(() => this.loadingService.hideSpinner()))
                  .subscribe((data) => {
                      this.getTestCase();
                  });
  }
}
