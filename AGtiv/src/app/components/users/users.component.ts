import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/services/remote.service';
import { AlertService } from 'src/app/services/alert.service';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: any[] = [];
  public maxDistance: number = 1000000000;
  public userCount: number = 0;
  public currentUser: any;
  constructor(private remoteService: RemoteService, private alertService: AlertService, private modalService: NgbModal) { }

  public ngOnInit(updateCurrentUser?) {
    this.remoteService.get("users/admin").subscribe((data) => {
      if (data) {
        this.users = data;
        this.userCount = data.length;
        for (const user of this.users) {
          // tslint:disable-next-line: no-bitwise
          user.distance = parseInt(user.distance, undefined) | 0;
          if (updateCurrentUser && user.id == this.currentUser.id) {
            this.currentUser = user;
          }
          user.hasHiddenWays = user.ways.filter((w) => w.hidden).length > 0;
        }
        setTimeout(() => {
          this.maxDistance = this.users.reduce((p, c) => p.distance > c.distance ? p : c).distance;
        }, 20);
      }
    });
  }

  public resetUserPassword(user) {
    if (confirm(`Soll das Passwort für "${user.realName}" mit dem Nicknamen "${user.username}" wirklich zurückgesetzt werden?`)) {
      const newPassword = prompt(`Neues Passwort für "${user.realName}" mit dem Nicknamen "${user.username}":`);
      if (newPassword) {
        this.remoteService.post(`users/${user.id}/password`, { password: newPassword }).subscribe((data) => {
          if (data && data.status) {
            this.alertService.success("Passwort erfolgreich geändert!");
          }
        })
      }
    }
  }

  public changeAdminStatus(user, willBeAdmin) {
    if (confirm(willBeAdmin ? `Soll" ${user.realName}" mit dem Nicknamen "${user.username}" wirklich zum Administrator gemacht werden?` : `Soll "${user.realName}" mit dem Nicknamen "${user.username}" wirklich kein Administrator mehr sein?`)) {
      this.remoteService.post(`users/${user.id}/admin`, { admin: willBeAdmin }).subscribe((data) => {
        if (data && data.status) {
          this.alertService.success(willBeAdmin ? "Benutzer erfolgreich zum Admin gemacht!" : "Adminstatus erfolgreich entfernt!");
          this.ngOnInit();
        }
      })
    }
  }

  public deleteUser(user) {
    if (confirm(`Soll" ${user.realName}" mit dem Nicknamen "${user.username}" wirklich gelöscht werden?`)) {
      this.remoteService.delete(`users/${user.id}`).subscribe((data) => {
        if (data && data.status) {
          this.alertService.success("Benutzer erfolgreich gelöscht!");
          this.ngOnInit();
        }
      })
    }
  }

  public inspect(user, content) {
    this.currentUser = user;
    this.currentUser.maxDistance = this.currentUser.ways.reduce((p, c) => p.distance > c.distance ? p : c).distance;
    this.modalService.open(content, { size: "xl", scrollable: true });
  }

  public changeVisibility(way, hidden) {
    this.remoteService.post(`users/ways/${way.id}/visibility`, {hidden}).subscribe((data) => {
      if (data && data.status) {
        this.alertService.success(`Strecke erfolgreich ${hidden ? "versteckt" : "angezeigt"}`);
        this.ngOnInit(true);
      }
    });
  }
}
