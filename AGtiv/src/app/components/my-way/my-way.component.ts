import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RemoteService } from 'src/app/services/remote.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    let defaultDate = "";
    let defaultDistance = "";
    if (this.route.snapshot.url.toString().indexOf("edit") != -1 && this.route.snapshot.queryParams.distance && this.route.snapshot.params.id && this.route.snapshot.queryParams.date) {
      this.editing = true;
      const d = new Date(this.route.snapshot.queryParams.date);
      defaultDate = d.toISOString().split('T')[0];
      defaultDistance = this.route.snapshot.queryParams.distance;
    }
    this.wayForm = this.formBuilder.group({
      date: new FormControl(defaultDate, [Validators.required]),
      distance: new FormControl(defaultDistance, [Validators.required, Validators.min(0.01), Validators.max(500)]),
    });
  }

  public get f() {
    return this.wayForm.controls;
  }

  public save() {
    this.submitted = true;
    if (!this.wayForm.invalid) {
      this.loading = true;
      this.remoteService.post(this.editing ? `ways/${this.route.snapshot.params.id}`: "ways", {
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
