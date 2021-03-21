import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
    FormBuilder, FormGroup, FormControl, Validators,
} from "@angular/forms";
import { AuthenticationService } from "../../services/authentication.service";
import { AlertService } from "../../services/alert.service";

@Component({
    selector: "app-sign-in",
    templateUrl: "./signin.component.html",
    styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
  public signinForm: FormGroup;
  public submitted = false;
  public loading = false;
  public lostPassword = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    public route: ActivatedRoute,
    public formBuilder: FormBuilder,
    public alertService: AlertService,
  ) { }

  ngOnInit(): void {
      this.signinForm = this.formBuilder.group({
          username: new FormControl("", [Validators.required]),
          password: new FormControl("", [Validators.required]),
      });
  }

  public get f() {
      return this.signinForm.controls;
  }

  public login(): void {
      this.submitted = true;
      if (this.signinForm.valid) {
          this.loading = true;
          this.authenticationService.login(this.f.username.value,
              this.f.password.value).subscribe((user) => {
              this.loading = false;
              // login successful if there's a jwt token in the response
              if (user && user.token) {
                  // store user details and jwt token in local storage to
                  // keep user logged in between page refreshes
                  sessionStorage.setItem("jwt_token", user.token);
                  sessionStorage.setItem("currentUser", JSON.stringify(user));
                  this.authenticationService.currentUser = user;
                  this.authenticationService.isLoggedIn = true;
                  this.router.navigate(["/home"]);
              }
          });
      }
  }
}
