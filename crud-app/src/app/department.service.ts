import { Department } from './department';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseUrl = "http://localhost:8082/v1/rest/countries";

  constructor(private httpClient :HttpClient) { }

  getAllDepartmentList(): Observable<Department[]>{
    return this.httpClient.get<Department[]>(`${this.baseUrl}`);
  }
}
