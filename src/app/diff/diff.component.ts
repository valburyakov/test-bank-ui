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
    let strInput = "diff --git a/user.yml b/user.yml\nindex ba98eaf..7938422 100644\n--- a/user.yml\n+++ b/user.yml\n@@ -3,6 +3,6 @@ age: 28\n address: 4011 16th Ave S\n phone numbers:\n- name: Home\n-  number: 206-555-5138\n+  number: 206-555-6789\n- name: Work";
    let outputHtml = this.diff2Html.getPrettyHtml(strInput, {inputFormat: 'diff', showFiles: true, matching: 'lines', outputFormat: "side-by-side"});
    this.outputHtml = outputHtml;
  }

}
