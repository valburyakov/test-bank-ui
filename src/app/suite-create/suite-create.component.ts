import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-suite-create',
  templateUrl: './suite-create.component.html',
  styleUrls: ['./suite-create.component.scss']
})
export class SuiteCreateComponent implements OnInit {

  suiteForm: FormGroup;

  constructor(private  apiService: ApiService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.suiteForm = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
    });
  }

  ngOnInit() {
  }

  createSuite() {
    let projectId = +this.route.snapshot.paramMap.get('projectId');
    let suite = {
      name: this.suiteForm.value.name,
      projectId: projectId
    };
    console.log(suite)
    this.apiService.createSuite(projectId, suite).subscribe(((response) => {
      let id =  response['id'];
      this.router.navigate(['suites/'+ id +'/cases']);
    }));
  }


}
