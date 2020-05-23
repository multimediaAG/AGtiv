import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RemoteService } from 'src/app/services/remote.service';
import { data } from 'src/app/data/ways';
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
    public endCityName = data.cities[data.cities.length - 1].name;
    public mapSrc: string = `${environment.apiUrl}statistics/currentMap.png`
    public confettiInterval: number;

    constructor(public authenticationService: AuthenticationService, private remoteService: RemoteService) { }

    public ngOnInit() {
        this.currentDistanceLoaded = false;
        this.remoteService.get("statistics/currentDistance").subscribe((d) => {
            if (d && (d.currentDistance || d.currentDistance === null)) {
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
                for (const city of data.cities) {
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
                if (this.nextCity && this.lastCity) {
                    this.lastCity.countryName = data.countries.filter((c) => c.code == this.lastCity.country)[0].name;
                    this.nextCity.countryName = data.countries.filter((c) => c.code == this.nextCity.country)[0].name;
                } else {
                    this.finished = true;
                }
            }
            if (this.finished) {
                this.manageConfetti();
            }
        });
    }

    public getImg(c) {
        return `/assets/cities/${c.image ? c.image : `${c.country}_${c.name.toLowerCase().replace(/ /g, "_")}.jpg`}`;
    }

    private manageConfetti() {
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
        };
        this.confettiInterval = setInterval(() => {
            requestAnimationFrame(frame);
        }, 500) as unknown as number;

        const count = 200;
        const defaults = {
            origin: { y: 0.9 }
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
        /* const count = 100;
        const defaults = {
            angle: 270,
            gravity: 0.2,
            disableForReducedMotion: true,
        };

        const fire = (particleRatio, opts) => {
            window.confetti(Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio)
            }));
        }

        const c = (x, y) => {
            fire(0.25, {
                origin: { x, y },
                spread: 26,
                startVelocity: 30,
            });
            fire(0.2, {
                origin: { x, y },
                spread: 60,
                startVelocity: 25,
            });
            fire(0.35, {
                origin: { x, y },
                spread: 100,
                decay: 0.91,
                startVelocity: 20,
            });
            fire(0.1, {
                origin: { x, y },
                spread: 120,
                startVelocity: 15,
                decay: 0.92,
            });
            fire(0.1, {
                origin: { x, y },
                spread: 120,
                startVelocity: 50,
            });
        }

        const s = (t) => {
            setTimeout(() => {
                for (let i = 0; i < 1; i += 0.1) {
                    c(i, 0);
                }
                s(10000);
            }, t)
        };
        s(500); */
    }

    public ngOnDestroy() {
        clearInterval(this.confettiInterval);
    }
}
