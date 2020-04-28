import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { MyWayComponent } from './components/my-way/my-way.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RulesComponent } from './components/rules/rules.component';
import { HomeComponent } from './components/home/home.component';
import { ScoresComponent } from './components/scores/scores.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MyWaysComponent } from './components/my-ways/my-ways.component';
import { NgxFlagIconCssModule } from "ngx-flag-icon-css";
import { InfoBikeDistanceComponent } from './components/_helpers/info-bike-distance/info-bike-distance.component';
import { UsersComponent } from './components/users/users.component';
import { NgbDatepickerModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    MyWayComponent,
    NavbarComponent,
    RulesComponent,
    HomeComponent,
    ScoresComponent,
    FooterComponent,
    MyWaysComponent,
    InfoBikeDistanceComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxFlagIconCssModule,
    NgbDatepickerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
