import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  public submitted: boolean = false;
  public loading: boolean = false;

  public readonly maxUsernameLength: number = 20;
  public readonly minUsernameLength: number = 2;
  public readonly minPasswordLength: number = 6;
  public readonly minNameLength: number = 6;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: new FormControl("", [Validators.minLength(this.minUsernameLength), Validators.maxLength(this.maxUsernameLength), Validators.required]),
      name: new FormControl("", [Validators.minLength(this.minNameLength), , Validators.required]),
      password: new FormControl("", [Validators.minLength(this.minPasswordLength), Validators.required]),
      passwordVerify: new FormControl("")
    });
  }

  public get f() {
    return this.signupForm.controls;
  }

  public signup() {
    this.submitted = true;
    if (!this.signupForm.invalid) {
      this.loading = true;
      this.httpClient.post(`${environment.apiUrl}users`, {
        username: this.f.username.value,
        realName: this.f.name.value,
        password: this.f.password.value,
        passwordVerify: this.f.passwordVerify.value,
        grade: this.f.grade,
      }).subscribe((data: any) => {
        if (data && data.status) {
          this.loading = false;
          this.router.navigate(["/signin"], {queryParams: {signupSuccessfull: true}})
        }
      });
    }
  }

}
