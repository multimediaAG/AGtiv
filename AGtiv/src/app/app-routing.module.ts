import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RulesComponent } from './components/rules/rules.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { MyWayComponent } from './components/my-way/my-way.component';
import { ScoresComponent } from './components/scores/scores.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { MyWaysComponent } from './components/my-ways/my-ways.component';
import { UsersComponent } from './components/users/users.component';
import { AdminGuard } from './guards/admin.guard';


const routes: Routes = [
  {
    path: "rules",
    component: RulesComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "login",
    component: SigninComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "my-way",
    component: MyWayComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: "my-way/edit/:id",
    component: MyWayComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: "my-ways",
    component: MyWaysComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: "users",
    component: UsersComponent,
    canActivate: [AuthenticationGuard, AdminGuard]
  },
  {
    path: "scores",
    component: ScoresComponent,
  },
  {
    path: "**",
    redirectTo: "/home",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
