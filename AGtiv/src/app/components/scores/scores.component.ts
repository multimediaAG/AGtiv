import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/services/remote.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent {
  public users: any[] = [];
  public allUsers: any[] = [];
  public maxDistance: number = 1000000000;
  public myPlace: number;
  public placesCount: number;
  public currentRoundIdx: number = parseInt(localStorage.getItem("currentRoundIdx"), undefined);
  public currentViewRoundIdx = this.currentRoundIdx;
  public rounds = Array(this.currentRoundIdx + 1).fill(undefined).map((x,i)=>i).reverse();
  public views = [
    {
      id: "all",
      name: "Alle"
    },
    {
      id: "students",
      name: "Schüler"
    },
    {
      id: "parents",
      name: "Eltern"
    },
    {
      id: "teachers",
      name: "Lehrer"
    },
    {
      id: "grades-absolute",
      name: "Klassen (absolut)"
    },
    {
      id: "grades-relative",
      name: "Klassen (relativ)"
    },
  ];
  public currentView = this.views[0];
  constructor(private remoteService: RemoteService, public authenticationService: AuthenticationService) { }

  public ngOnInit() {
   this.remoteService.get(`users/${this.currentViewRoundIdx}`).subscribe((data) => {
      if (data) {
        this.allUsers = data;
        for (const user of this.allUsers) {
          // tslint:disable-next-line: no-bitwise
          user.distance = parseInt(user.distance, undefined) | 0;
        }
        this.filterAndDisplayData();
      }
    });
  }

  public viewRound(idx) {
    this.currentViewRoundIdx = idx;
    this.ngOnInit();
  }

  private filterAndDisplayData() {
    if (this.currentView.id == "all") {
      this.users = this.allUsers;
    } else if (this.currentView.id == "students") {
      this.users = this.allUsers.filter((u) => u.grade.length < 4);
    } else if (this.currentView.id == "teachers") {
      this.users = this.allUsers.filter((u) => u.grade.length > 4 && u.grade != "Eltern");
    } else if (this.currentView.id == "parents") {
      this.users = this.allUsers.filter((u) => u.grade == "Eltern");
    } else if (this.currentView.id == "grades-relative" || this.currentView.id == "grades-absolute") {
      const grades = {};
      for (const user of this.allUsers) {
        if (!grades[user.grade]) {
          grades[user.grade] = {
            distance: 0,
            users: 0,
          };
        }
        grades[user.grade].distance += user.distance;
        grades[user.grade].users++;
      }
      this.users = [];
      for (const [grade, d] of Object.entries(grades) as any) {
        this.users.push({
          grade,
          distance: this.currentView.id == "grades-absolute" ? d.distance : Math.round(d.distance / d.users),
        });
      }
      this.users.sort((a, b) => b.distance - a.distance);
    }
    this.maxDistance = 1000000000;
    let place = 1;
    let lastUser;
    for (const user of this.users) {
      if (lastUser && lastUser.distance && user.distance < lastUser.distance) {
        place++;
      }
      user.place = place;
      lastUser = user;
    }
    if (this.authenticationService.loggedIn) {
      if (this.currentView.id == "grades-absolute" || this.currentView.id == "grades-relative") {
        this.myPlace = this.users.filter((u) => u.grade == this.authenticationService.currentUser.grade)[0].place;
      } else {
        const user = this.users.filter((u) => u.username == this.authenticationService.currentUser.username);
        if (user && user[0]) {
          this.myPlace = user[0].place;
        } else {
          this.myPlace = undefined;
        }
      }
      this.placesCount = this.users[this.users.length - 1].place;
    }
    setTimeout(() => {
      if (this.users.length) {
        this.maxDistance = this.users.reduce((p, c) => p.distance > c.distance ? p : c).distance;
      }
    }, 20);
  }

  public view(v) {
    this.currentView = v;
    this.filterAndDisplayData();
  }
}
