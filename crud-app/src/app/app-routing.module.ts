import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [

  {path:'homepage', component: HomePageComponent},
  {path:'', redirectTo :'homepage' , pathMatch:'full'},
  {path:'departments', component: DepartmentListComponent},
  {path:'add-department', component: AddDepartmentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
