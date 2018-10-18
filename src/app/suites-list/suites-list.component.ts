import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-suites-list',
  templateUrl: './suites-list.component.html',
  styleUrls: ['./suites-list.component.css']
})
export class SuitesListComponent implements OnInit {

  private  suites:  Array<object> = [];
  constructor(private  apiService:  ApiService,  private route: ActivatedRoute) { }
  ngOnInit() {
    this.getSuites();
  }

  public  getSuites(){
    const id = +this.route.snapshot.paramMap.get('projectId');

    this.apiService.getSuites(id).subscribe((data:  Array<object>) => {
        this.suites  =  data;
        console.log(data);
    });
  }

}
