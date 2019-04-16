import { Component, Inject, OnInit } from '@angular/core';
import { DIFF2HTML_TOKEN } from '../services/diff2html.token';

@Component({
  selector: 'app-diff',
  templateUrl: './diff.component.html',
  styleUrls: ['./diff.component.scss']
})
export class DiffComponent implements OnInit {
  outputHtml: string;

  constructor(@Inject(DIFF2HTML_TOKEN) private diff2Html: Diff2Html.Diff2Html) {
    this.init();
  }

  ngOnInit() {
    console.log(this.diff2Html);
  }

  init() {
    let strInput = "--- old\n+++ old\n@@ -1,2 +1,2 @@\n-Jira-456\n+Jira-476\n User is able to create somt";
    let outputHtml = this.diff2Html.getPrettyHtml(strInput, {inputFormat: 'diff', showFiles: true, matching: 'lines'});
    this.outputHtml = outputHtml;
  }

}
