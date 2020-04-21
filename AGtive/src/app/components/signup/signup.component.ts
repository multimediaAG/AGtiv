import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public readonly maxUsernameLength: number = 20;
  public readonly minUsernameLength: number = 2;

  public username: string = "";
  public password: string = "";
  public passwordVerify: string = "";

  public usernameInvalid: boolean = false;
  public usernameAlreadyTaken: boolean = false;
  public passwordsDifferent: boolean = false;

  constructor() { }

  ngOnInit() { }

  public checkUserName(): boolean {
    return (this.username.length >= this.minUsernameLength && this.username.length <= this.maxUsernameLength)
  }

  public signup() {
    this.usernameInvalid = !this.checkUserName();
    this.usernameAlreadyTaken = false; // TODO

    this.passwordsDifferent = (this.password != this.passwordVerify);

    if (!this.usernameInvalid && !this.usernameAlreadyTaken && !this.passwordsDifferent) {
      // Signup
    }
  }

}
