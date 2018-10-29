import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-suites-list',
  templateUrl: './suites-list.component.html',
  styleUrls: ['./suites-list.component.scss']
})
export class SuitesListComponent implements OnInit {

  private suites:  Array<object> = [];
  private projectId = +this.route.snapshot.paramMap.get('projectId');

  constructor(private  apiService:  ApiService,  private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.getSuites();
  }

  public getSuites(){
    this.apiService.getSuites(this.projectId).subscribe((data:  Array<object>) => {
        this.suites  =  data;
        console.log(data);
    });
  }


  openCreateSuite() {
    this.router.navigate(['/projects/'+ this.projectId+'/create-suite']);
  }
}
