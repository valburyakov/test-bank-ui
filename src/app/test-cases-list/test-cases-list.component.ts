import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-cases-list',
  templateUrl: './test-cases-list.component.html',
  styleUrls: ['./test-cases-list.component.scss']
})
export class TestCasesListComponent implements OnInit {

  private cases:  Array<object> = [];

  constructor(private  apiService:  ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCases();
  }

  public  getCases(){
    const suiteId = +this.route.snapshot.paramMap.get('suiteId');
    this.apiService.getCases(suiteId).subscribe((data:  Array<object>) => {
      this.cases  =  data;
      console.log(data);
    });
  }

}
