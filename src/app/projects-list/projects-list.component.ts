import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../services/api.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  projects:  Array<object> = [];

  constructor(private  apiService:  ApiService) { }
  ngOnInit() {
    this.getProjects();
  }

  public  getProjects(){
    this.apiService.getProjects().subscribe((data:  Array<object>) => {
        this.projects  =  data;
        console.log(data);
    });
  }
}
