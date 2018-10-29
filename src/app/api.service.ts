import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL  =  'http://localhost:8080';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json;charset=UTF-8'
    })
  };


  constructor(private  httpClient:  HttpClient) { }

  getProjects(){
    return  this.httpClient.get(`${this.API_URL}/projects`);
  }

  getSuites(projectId){
    return this.httpClient.get(`${this.API_URL}/projects/${projectId}/suites?deleted=false`)
  }

  getCases(suiteId){
    return this.httpClient.get(`${this.API_URL}/suites/${suiteId}/cases?deleted=false`)
  }

  getTestCase(caseId){
    return this.httpClient.get(`${this.API_URL}/suites/cases/${caseId}`)
  }

  createProject(project){
    return this.httpClient.post(`${this.API_URL}/projects`, project, this.httpOptions);
  }

  createSuite(projectId, suite){
    return this.httpClient.post(`${this.API_URL}/projects/${projectId}/suites`, suite, this.httpOptions);
  }
}
