import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RulesComponent } from './components/rules/rules.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';


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
    path: "**",
    redirectTo: "/home",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
