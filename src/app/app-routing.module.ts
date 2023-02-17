import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup-page/signup.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path: 'sprint', component: TodoComponent},
  {path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginPageComponent },
  {path: 'dashboard', component: DashboardComponent},
  { path: '', component: AppComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
