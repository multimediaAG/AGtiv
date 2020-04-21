import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RulesComponent } from './components/rules/rules.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignupComponent } from './components/signup/signup.component';
import { EntryComponent } from './components/entry/entry.component';
import { ScoresComponent } from './components/scores/scores.component';


const routes: Routes = [
  {
    path: "rules",
    component: RulesComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {path: "signin",
  component: SigninComponent,},
  {
    path: "signin",
    component: SignInComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "entry",
    component: EntryComponent,
  },
  {
    path: "scores",
    component: ScoresComponent,
  },
  {
    path: "**",
    redirectTo: "/home",
  },
  {
    path: "entry",
    component: EntryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
