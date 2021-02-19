import { RegisterComponent } from './register/register.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './create/add-user.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';

const routes: Routes = [
  { path:'users', component: UsersComponent,canActivate:[AuthGaurdService]},
  { path:'users/:id', component: DetailComponent,canActivate:[AuthGaurdService]},
  { path:'adduser', component: AddUserComponent,canActivate:[AuthGaurdService]},
  { path:'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
