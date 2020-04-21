import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignupComponent } from './components/signup/signup.component';
import { EntryComponent } from './components/entry/entry.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RulesComponent } from './components/rules/rules.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ScoresComponent } from './components/scores/scores.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignupComponent,
    EntryComponent,
    NavbarComponent,
    RulesComponent,
    LoginComponent,
    HomeComponent,
    ScoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }