import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;

  public readonly maxUsernameLength: number = 20;
  public readonly minUsernameLength: number = 2;

  public usernameInvalid: boolean = false;
  public usernameAlreadyTaken: boolean = false;
  public passwordsDifferent: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: new FormControl("", [Validators.minLength(this.minUsernameLength), Validators.maxLength(this.maxUsernameLength)]),
      password: "",
      passwordVerify: ""
    });
  }

  public signup(signUpData: any) {
    console.log(signUpData);
    this.usernameInvalid = signUpData.get("username").status !== "VALID";
    this.usernameAlreadyTaken = false; // TODO

    this.passwordsDifferent = (signUpData.get("password").value != signUpData.get("passwordVerify").value);

    if (!this.usernameInvalid && !this.usernameAlreadyTaken && !this.passwordsDifferent) {
      // Signup
    }
  }

}
