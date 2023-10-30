import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './+pages/login/login.component';
import { RegisterComponent } from './+pages/register/register.component';
import { DashboardComponent } from './+pages/dashboard/dashboard.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
