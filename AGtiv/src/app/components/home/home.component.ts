import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RemoteService } from 'src/app/services/remote.service';
import { data } from 'src/app/data/rounds';
import { environment } from 'src/environments/environment';

declare const window: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public currentDistanceLoaded: boolean = false;
    public currentDistance: number = 0;
    public nextCity: any;
    public lastCity: any;
    public currentStepTotalDistance: number;
    public currentStepDistance: number;
    public userCount: number;
    public finished = false;
    public bestUsers: any = [];
    public remainingDistance: number;
    public myDistance: number;
    public currentRoundIdx: number = parseInt(localStorage.getItem("currentRoundIdx") ? localStorage.getItem("currentRoundIdx") : "0", undefined);
    public endCityName = data.rounds[this.currentRoundIdx].cities[data.rounds[this.currentRoundIdx].cities.length - 1].name;
    public mapSrc: string = `${environment.apiUrl}statistics/currentMap.png`
    public confettiTimeout: number;
    public data = data;
    public canAddWays = false;

    constructor(public authenticationService: AuthenticationService, private remoteService: RemoteService) { }

    public ngOnInit() {
        this.currentDistanceLoaded = false;
        this.remoteService.get("statistics/currentDistance").subscribe((d) => {
            if (d && (d.currentDistance || d.currentDistance === null)) {

                localStorage.setItem("finished", d.finished ? "true" : "false");
                localStorage.setItem("canAddWays", d.canAddWays ? "true" : "false");
                localStorage.setItem("currentRoundIdx", d.currentRoundIdx);
                this.finished = d.finished;
                this.canAddWays = d.canAddWays;
                this.currentRoundIdx = d.currentRoundIdx;

                if (d.currentDistance === null) {
                    d.currentDistance = 0;
                }
                if (d.remainingDistance === null) {
                    d.remainingDistance = 0;
                }
                if (d.myDistance === null) {
                    d.myDistance = 0;
                }
                this.userCount = d.userCount;
                this.bestUsers = d.bestUsers;
                this.remainingDistance = d.remainingDistance;
                this.currentDistanceLoaded = true;
                this.currentDistance = d.currentDistance;
                this.myDistance = d.myDistance;
                let distanceCounter: number = 0;
                for (const city of data.rounds[this.currentRoundIdx].cities) {
                    if (this.lastCity) {
                        distanceCounter += city.distance;
                        if (this.currentDistance < distanceCounter) {
                            this.nextCity = city;
                            this.currentStepDistance = this.currentDistance - (distanceCounter - city.distance);
                            break;
                        }
                    }
                    this.lastCity = city;
                }
                this.finished = d.finished;
                this.canAddWays = d.canAddWays;
            }
            if (this.nextCity && this.lastCity) {
                this.lastCity.countryName = data.countries.filter((c) => c.code == this.lastCity.country)[0].name;
                this.nextCity.countryName = data.countries.filter((c) => c.code == this.nextCity.country)[0].name;
            }
            if (this.finished) {
                this.manageConfetti();
            }
        });
    }

    public getImg(c) {
        return `/assets/cities/${c.image ? c.image : `${c.country}_${c.name.toLowerCase().replace(/ /g, "_")}.jpg`}`;
    }

    public replaceVariables(s: string) {
        return s.replace(/\{\{userCount\}\}/, this.userCount ? this.userCount.toString() : "");
    }

    private manageConfetti() {
        const that = this;
        function frame() {
            for (let i = 0; i <= 1; i += 0.25) {
                window.confetti({
                    particleCount: 5,
                    angle: 60,
                    spread: 55,
                    origin: { x: i, y: 0 },
                    ticks: 500,
                });
            }
            that.confettiTimeout = setTimeout(() => {
                requestAnimationFrame(frame);
            }, 500) as unknown as number;
        };

        function cannon(x) {
            const count = 200;
            const defaults = {
                origin: { y: 0.9, x }
            };
                function fire(particleRatio, opts) {
                window.confetti(Object.assign({}, defaults, opts, {
                    particleCount: Math.floor(count * particleRatio)
                }));
            }
            fire(0.25, {
                spread: 26,
                startVelocity: 55,
            });
            fire(0.2, {
                spread: 60,
            });
            fire(0.35, {
                spread: 100,
                decay: 0.91,
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 25,
                decay: 0.92,
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 45,
            });
        }
        frame();
        cannon(0.25);
        cannon(0.5);
        cannon(0.75);
    }

    public ngOnDestroy() {
        clearTimeout(this.confettiTimeout);
    }
}
