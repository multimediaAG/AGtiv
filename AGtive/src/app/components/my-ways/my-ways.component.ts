import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RemoteService } from 'src/app/services/remote.service';

@Component({
  selector: 'app-my-ways',
  templateUrl: './my-ways.component.html',
  styleUrls: ['./my-ways.component.scss']
})
export class MyWaysComponent implements OnInit {
  public maxDistance: number = 1000;
  public waysLoaded: boolean = false;
  public myWays = [];

  public constructor(public route: ActivatedRoute, private remoteService: RemoteService) {}

  ngOnInit(): void {
    this.remoteService.get("ways").subscribe((ways) => {
      this.myWays = ways;
      this.waysLoaded = true;
      this.maxDistance = this.myWays.reduce((p, c) => p.distance > c.distance ? p : c).distance;
    })
  }

}
