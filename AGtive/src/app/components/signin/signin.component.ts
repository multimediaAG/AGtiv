import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from 'src/app/service/authentication.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
  
})
export class SigninComponent implements OnInit {

  public username: string = "";
  public password: string = "";
  public formInvalid: boolean = false;
  public usernameOrPasswordWrong: boolean = false;

  constructor(private authenticationService: AuthenticationService, private router:Router) { }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  
  public login(): void {
    if (this.username && this.password) {
      const loginSuccessful: boolean = this.authenticationService.login(this.username, this.password);
      if (loginSuccessful) {
        this.usernameOrPasswordWrong = false;
        this.router.navigate(["/home"]);
      } else { this.usernameOrPasswordWrong = true; }

    } else { this.formInvalid = true; }

  }


}
