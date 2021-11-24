import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'admin', children:[
    {path: 'user', component: LoginComponent},
    {path: 'dashboard', component: HomeComponent},
    {path: 'contact', component: DetailsComponent}
  ]},
  {
    path: '', redirectTo: 'admin/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
