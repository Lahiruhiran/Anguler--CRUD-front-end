import { Department } from './../department';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  department : Department = new Department();

  constructor() { }

  ngOnInit(): void {

  }
  onSubmit(){
    console.log(this.department);
  }

}
