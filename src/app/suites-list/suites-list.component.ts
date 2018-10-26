import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suites-list',
  templateUrl: './suites-list.component.html',
  styleUrls: ['./suites-list.component.scss']
})
export class SuitesListComponent implements OnInit {

  private suites:  Array<object> = [];
  constructor(private  apiService:  ApiService,  private route: ActivatedRoute) { }
  ngOnInit() {
    this.getSuites();
  }

  public getSuites(){
    const projectId = +this.route.snapshot.paramMap.get('projectId');
    this.apiService.getSuites(projectId).subscribe((data:  Array<object>) => {
        this.suites  =  data;
        console.log(data);
    });
  }

}
