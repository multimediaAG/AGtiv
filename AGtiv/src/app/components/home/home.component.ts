import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RemoteService } from 'src/app/services/remote.service';
import { data } from 'src/app/data/ways';
import { environment } from 'src/environments/environment';

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
    });
  }

  public getImg(c) {
    return `/assets/cities/${c.image ? c.image : `${c.country}_${c.name.toLowerCase().replace(/ /g, "_")}.jpg`}`;
  }
}
