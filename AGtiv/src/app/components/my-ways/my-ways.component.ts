import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RemoteService } from "../../services/remote.service";
import { AlertService } from "../../services/alert.service";
import { AuthenticationService } from "../../services/authentication.service";
import { data } from "../../data/rounds";

@Component({
    selector: "app-my-ways",
    templateUrl: "./my-ways.component.html",
    styleUrls: ["./my-ways.component.scss"],
})
export class MyWaysComponent implements OnInit {
    public maxDistance = 10000;
    public waysLoaded = false;
    public myTotalDistance = 0;
    public myWays = [];
    public finished: boolean = localStorage.getItem("canAddWays2") == "false";
    public currentRoundIdx: number = parseInt(localStorage.getItem("currentRoundIdx2"), undefined);
    public currentViewRoundIdx = this.currentRoundIdx;
    public startDate: string = data.rounds[this.currentViewRoundIdx]
        ?.startDate.toLocaleDateString();
    public rounds = Array(this.currentRoundIdx + 1).fill(undefined).map((x, i) => i).reverse();

    public constructor(public route: ActivatedRoute,
        private remoteService: RemoteService, private alertService: AlertService,
        public authenticationService: AuthenticationService) { }

    ngOnInit(): void {
        this.remoteService.get(`ways/${this.currentViewRoundIdx}`).subscribe((ways) => {
            this.myWays = ways;
            this.authenticationService.currentUser.hasHiddenWays = this.myWays
                .filter((w) => w.hidden).length > 0;
            this.waysLoaded = true;
            setTimeout(() => {
                this.update();
            }, 20);
        });
    }

    public viewRound(idx) {
        this.currentViewRoundIdx = idx;
        this.startDate = data.rounds[this.currentViewRoundIdx]?.startDate.toLocaleDateString();
        this.ngOnInit();
    }

    public removeMyWay(myWay) {
        // eslint-disable-next-line no-restricted-globals
        if (confirm(`Soll die Strecke vom ${new Date(myWay.date).toLocaleDateString()} mit einer Strecke von ${myWay.distance} km wirklich gelöscht werden?`)) {
            this.remoteService.delete(`ways/${myWay.id}`).subscribe((d) => {
                if (d && d.status) {
                    this.alertService.success("Die Strecke wurde erfolgreich gelöscht!");
                    this.myWays = this.myWays.filter((w) => w.id != myWay.id);
                    this.update();
                }
            });
        }
    }

    private update() {
        this.maxDistance = this.myWays.reduce(
            (p, c) => (p.distance > c.distance ? p : c), 0,
        ).distance;
        this.myTotalDistance = this.myWays.reduce(
            (a, b) => a + (b.distance && !b.hidden ? b.distance : 0), 0,
        );
    }
}
