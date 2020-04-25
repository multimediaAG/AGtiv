import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RemoteService } from 'src/app/services/remote.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-my-ways',
  templateUrl: './my-ways.component.html',
  styleUrls: ['./my-ways.component.scss']
})
export class MyWaysComponent implements OnInit {
  public maxDistance: number = 10000;
  public waysLoaded: boolean = false;
  public myTotalDistance: number = 0;
  public myWays = [];

  public constructor(public route: ActivatedRoute, private remoteService: RemoteService, private alertService: AlertService) {}

  ngOnInit(): void {
    this.remoteService.get("ways").subscribe((ways) => {
      this.myWays = ways;
      this.waysLoaded = true;
      setTimeout(() => {
        this.update();
      }, 20);
    })
  }

  public removeMyWay(myWay) {
    if (confirm(`Soll der Weg vom ${myWay.date} mit einer Strecke von ${myWay.distance} km wirlich gelöscht werden?`)) {
      this.remoteService.delete(`ways/${myWay.id}`).subscribe((data) => {
        if (data && data.status) {
          this.alertService.success("Der Weg wurde erfolgreich gelöscht!");
          this.myWays = this.myWays.filter((w) => w.id != myWay.id);
          this.update();
        }
      });
    }
  }

  private update() {
    this.maxDistance = this.myWays.reduce((p, c) => p.distance > c.distance ? p : c).distance;
    this.myTotalDistance = this.myWays.reduce((a, b) => a + (b.distance || 0), 0);
  }

}