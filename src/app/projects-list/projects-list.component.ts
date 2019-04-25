import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../services/api.service';
import { concatMap, finalize } from 'rxjs/operators';
import { zip } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  projects:  Array<object> = [];

  constructor(private apiService: ApiService, private loadingService: LoadingService) { }
  ngOnInit() {
    this.getProjects();
    this.getTreeData();
  }

  public getProjects() {
    this.loadingService.showSpinner();
    this.apiService.getProjects().pipe(finalize(() => this.loadingService.hideSpinner()))
      .subscribe((data:  Array<object>) => {
        this.projects = data;
        console.log(data);
    });
  }

  getTreeData() {
    return this.apiService.getProjects().pipe(
      concatMap(projects => zip(...projects.map(project =>  this.apiService.getCases(project.id))))
    ).subscribe(
      res => console.log(res)
    )
  }


}
