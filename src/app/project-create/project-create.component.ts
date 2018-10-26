import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
  }

  createContact(){

    var  project  = {
        name: "This is from front"
    };
    this.apiService.createProject(project).subscribe((response) => {
        console.log(response);
    });
    };
}
