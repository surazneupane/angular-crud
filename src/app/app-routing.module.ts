import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'',component:UsersComponent},
  {path:'users',component:UsersComponent},
  {path:'users/detail/:id',component:UserDetailComponent},
  {path:'users/edit/:id',component:UserEditComponent},
  {path:'users/add',component:AddUserComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
