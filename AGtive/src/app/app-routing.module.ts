import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RulesComponent } from './components/rules/rules.component';
import { HomeComponent } from './components/home/home.component';
import { EntryComponent } from './entry/entry.component';



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
