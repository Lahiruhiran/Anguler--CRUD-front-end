import { Component, OnInit } from '@angular/core';
import {Department} from "../department";
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments!: Department[];

  constructor(private departmentService : DepartmentService) { }

  ngOnInit(): void {
    this.getDepartment();
  }

  private getDepartment(){
    this.departmentService.getAllDepartmentList().subscribe(data =>{
      this.departments = data;
    });

  }
}
