// import { UserModule } from './user/user.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: ()=> import('./admin/admin.module').then(m=> m.AdminModule)
  },
  {
    path: 'user', loadChildren: ()=> import('./user/user.module').then(m=> m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
