import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';
import { Testcase } from '@models/testcase';
import { ReviewModel } from '@models/review.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json;charset=UTF-8'
    })
  };


  constructor(private  httpClient:  HttpClient) { }

  getProjects() {
    return  this.httpClient.get<ProjectModel[]>(`${this.API_URL}/projects`);
  }

  getSuites(projectId) {
    return this.httpClient.get(`${this.API_URL}/projects/${projectId}/suites?deleted=false`);
  }

  getLabels(projectId: number) {
    return this.httpClient.get<string[]>(`${this.API_URL}/project/${projectId}/labels`);
  }

  addTestCase(testCase: Testcase, projectId: number) {
    return this.httpClient.post<Testcase>(`${this.API_URL}/project/${projectId}/case`, testCase, this.httpOptions);
  }

  updateTestCase(testCase: Testcase) {
    return this.httpClient.put<ReviewModel>(`${this.API_URL}/case/${testCase.id}/update`, testCase, this.httpOptions);
  }

  getCases(suiteId) {
    return this.httpClient.get(`${this.API_URL}/project/${suiteId}/cases?deleted=false`);
  }

  getTestCase(caseId) {
    return this.httpClient.get(`${this.API_URL}/case/${caseId}`);
  }

  createProject(project) {
    return this.httpClient.post(`${this.API_URL}/project`, project, this.httpOptions);
  }

  createSuite(projectId, suite) {
    return this.httpClient.post(`${this.API_URL}/projects/${projectId}/suites`, suite, this.httpOptions);
  }

  requestReview(caseId: number, committer: Object) {
    return this.httpClient.post(`${this.API_URL}/case/${caseId}/create-review`, committer);
  }

  merge(pullRequestId: number) {
    return this.httpClient.post(`${this.API_URL}/pull-request/${pullRequestId}/merge`, {});
  }

}
