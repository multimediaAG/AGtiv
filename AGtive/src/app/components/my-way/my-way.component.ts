import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RemoteService } from 'src/app/services/remote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-way',
  templateUrl: './my-way.component.html',
  styleUrls: ['./my-way.component.scss']
})
export class MyWayComponent {
  public editing: boolean = false;
  public submitted: boolean = false;
  public loading: boolean = false;
  public wayForm: FormGroup;
  public constructor(
    private formBuilder: FormBuilder,
    private remoteService: RemoteService,
    private router: Router,
  ) { }

  public ngOnInit() {
    this.wayForm = this.formBuilder.group({
      date: new FormControl("", [Validators.required]),
      distance: new FormControl("", [Validators.required]),
    });
  }

  public get f() {
    return this.wayForm.controls;
  }

  public save() {
    this.submitted = true;
    if (!this.wayForm.invalid) {
      this.loading = true;
      this.remoteService.post("ways", {
        distance: this.f.distance.value,
        date: this.f.date.value,
      }).subscribe((data) => {
        if (data && data.status) {
          this.router.navigate(["/my-ways"], { queryParams: { savedSuccessfully: true}})
        }
      });
    }
  }
}
