import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-cases-list',
  templateUrl: './test-cases-list.component.html',
  styleUrls: ['./test-cases-list.component.scss']
})
export class TestCasesListComponent implements OnInit {

  cases:  Array<object> = [];

  constructor(private  apiService:  ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCases();
  }

  public  getCases(){
    const projectId = +this.route.snapshot.paramMap.get('projectId');
    this.apiService.getCases(projectId).subscribe((data:  Array<object>) => {
      this.cases  =  data;
      console.log(data);
    });
  }

}
