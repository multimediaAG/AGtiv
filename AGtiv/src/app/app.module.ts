import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { MyWayComponent } from './components/my-way/my-way.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RulesComponent } from './components/rules/rules.component';
import { HomeComponent } from './components/home/home.component';
import { ScoresComponent } from './components/scores/scores.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
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
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from 'ng2-charts';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { SafePipe } from 'src/pipes/safe.pipe';
import { ReadMoreComponent } from './components/_helpers/read-more/read-more.component';

registerLocaleData(localeDe);

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
    StatisticsComponent,
    UsersComponent,
    SafePipe,
    ReadMoreComponent,
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
    ChartsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: "de-DE" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
