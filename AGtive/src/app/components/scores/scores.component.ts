import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/services/remote.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent {
  public users: any[] = [];
  public maxDistance: number = 1000000000;
  constructor(private remoteService: RemoteService) { }

  public ngOnInit() {
    this.remoteService.get("users").subscribe((data) => {
      if (data) {
        this.users = data;
        let place = 1;
        let lastUser;
        for (const user of this.users) {
          if (lastUser && lastUser.distance && user.distance < lastUser.distance) {
            place++;
          }
          user.place = place;
          lastUser = user;
        }
        setTimeout(() => {
          this.maxDistance = this.users.reduce((p, c) => p.distance > c.distance ? p : c).distance;
        }, 20);
      }
    });
  }
}
