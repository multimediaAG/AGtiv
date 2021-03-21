import { Component } from "@angular/core";
import {
    FormControl, Validators, FormBuilder, FormGroup, AbstractControl,
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { RemoteService } from "../../services/remote.service";
import { data } from "../../data/rounds";

const types = {
    bike: 1,
    walk: 4,
};

@Component({
    selector: "app-my-way",
    templateUrl: "./my-way.component.html",
    styleUrls: ["./my-way.component.scss"],
})
export class MyWayComponent {
  public editing = false;
  public submitted = false;
  public loading = false;
  public wayForm: FormGroup;
  public currentRoundIdx: number = parseInt(localStorage.getItem("currentRoundIdx2"), undefined);
  public minDate = {
      year: data.rounds[this.currentRoundIdx].startDate.getFullYear(),
      day: data.rounds[this.currentRoundIdx].startDate.getDate(),
      month: data.rounds[this.currentRoundIdx].startDate
          .getMonth() + 1, // because they start with 0
  }
    public minDateFormatted: string = data.rounds[this.currentRoundIdx]
        ?.startDate.toLocaleDateString();
  public maxDate = {
      year: new Date().getFullYear(),
      day: new Date().getDate(),
      month: new Date().getMonth() + 1, // because they start with 0
  }
  public constructor(
    private formBuilder: FormBuilder,
    private remoteService: RemoteService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  public ngOnInit() {
      let defaultDate = "" as any;
      let defaultDistance = 0;
      let defaultType = "bike";
      if (this.route.snapshot.url.toString().indexOf("edit") != -1 && this.route.snapshot.queryParams.distance && this.route.snapshot.params.id && this.route.snapshot.queryParams.date) {
          this.editing = true;
          const d = new Date(this.route.snapshot.queryParams.date);
          [defaultDate] = d.toISOString().split("T");
          defaultDate = {
              year: parseInt(defaultDate.split("-")[0], undefined),
              month: parseInt(defaultDate.split("-")[1], undefined),
              day: parseInt(defaultDate.split("-")[2], undefined) + 1,
          };
          defaultType = this.route.snapshot.queryParams.type;
          defaultDistance = this.route.snapshot.queryParams.distance;
          if (!parseInt(defaultDistance as any, 10)) {
              defaultDistance = 0;
          } else {
              defaultDistance = parseInt(defaultDistance as any, 10);
          }
          defaultDistance /= types[defaultType];
          defaultDistance = Math.round(defaultDistance);
      }
      this.wayForm = this.formBuilder.group({
          date: new FormControl(defaultDate, [Validators.required, (control: AbstractControl) => {
              const currentDateTime = new Date();
              currentDateTime.setHours(0, 0, 0, 0);
              const controlValue = new Date(control.value);
              controlValue.setHours(0, 0, 0, 0);
              if (currentDateTime < control.value) {
                  return { dateInFuture: true };
              }
              return null;
          }]),
          type: new FormControl(defaultType, [Validators.required]),
          distance: new FormControl(defaultDistance,
              [Validators.required, Validators.min(0.01), Validators.max(500)]),
      });
  }

  public get f() {
      return this.wayForm.controls;
  }

  public save() {
      this.submitted = true;
      if (!this.wayForm.invalid) {
          this.loading = true;
          this.remoteService.post(this.editing ? `ways/${this.route.snapshot.params.id}` : "ways", {
              distance: this.getBikeDistance(),
              date: `${this.f.date.value.year}-${this.f.date.value.month}-${this.f.date.value.day}`,
              type: this.f.type.value,
          }).subscribe((d) => {
              if (d && d.status) {
                  this.router.navigate(["/my-ways"], { queryParams: { savedSuccessfully: true } });
              }
          });
      }
  }

  public getBikeDistance() {
      return Math.round(this.f.distance.value * types[this.f.type.value]);
  }
}
