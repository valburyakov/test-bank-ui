import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  projectForm: FormGroup;

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private router: Router,
              private loadingService: LoadingService) {
    this.projectForm = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
      description: this.formBuilder.control('')
    });
  }

  ngOnInit() {
  }

  createProject() {
    const project = {
      name: this.projectForm.value.name,
      description: this.projectForm.value.description,
      private: true
    };

    this.loadingService.showSpinner();
    this.apiService.createProject(project).pipe(finalize(() => this.loadingService.hideSpinner()))
      .subscribe(((response) => {
      this.router.navigate(['projects']);
    }));
  }
}
