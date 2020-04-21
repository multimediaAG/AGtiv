import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RulesComponent } from './components/rules/rules.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { EntryComponent } from './components/entry/entry.component';
import { ScoresComponent } from './components/scores/scores.component';

import { AuthenticationGuard } from './guards/authentication.guard';


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
    path: "entry",
    component: EntryComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: "scores",
    component: ScoresComponent,
  },
  {
    path: "**",
    redirectTo: "/home",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
