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
  public readonly minPasswordLength: number = 8;

  public usernameInvalid: boolean = false;
  public usernameAlreadyTaken: boolean = false;
  public passwordsDifferent: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: new FormControl("", [Validators.minLength(this.minUsernameLength), Validators.maxLength(this.maxUsernameLength), Validators.required]),
      password: new FormControl("", [Validators.minLength(this.minPasswordLength), Validators.required]),
      passwordVerify: new FormControl("")
    });
  }

  public signup() {
    this.usernameInvalid = this.signupForm.controls.username.status !== "VALID";
    this.usernameAlreadyTaken = false; // TODO

    this.passwordsDifferent = (this.signupForm.controls.password.value != this.signupForm.controls.passwordVerify.value);

    if (!this.usernameInvalid && !this.usernameAlreadyTaken && !this.passwordsDifferent) {
      // Signup
    }
  }

}
