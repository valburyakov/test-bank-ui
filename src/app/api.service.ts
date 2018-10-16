import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL  =  'http://localhost:8080';

  constructor(private  httpClient:  HttpClient) { }

  getProjects(){
    return  this.httpClient.get(`${this.API_URL}/projects`);
  }

  createProject(project){
    return  this.httpClient.post(`${this.API_URL}/projects`,project);
  }
}
