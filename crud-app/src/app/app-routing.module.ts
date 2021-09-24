import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [

  {path:'departments', component: DepartmentListComponent},
  {path:'homepage', component: HomePageComponent},
  {path:'', redirectTo :'homepage' , pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
