import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  projectForm: FormGroup;

  constructor(private  apiService: ApiService, private formBuilder: FormBuilder, private router: Router) {
    this.projectForm = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
    });
  }

  ngOnInit() {
  }

  createProject() {
    let project = {
      name: this.projectForm.value.name
    };
    this.apiService.createProject(project).subscribe(((response) => {
      let id =  response['id'];
      this.router.navigate(['/projects/'+ id+'/suites']);
    }));
  }


}
