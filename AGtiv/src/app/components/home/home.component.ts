import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RemoteService } from 'src/app/services/remote.service';
import { data } from 'src/app/data/ways';

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

  constructor(private authenticationService: AuthenticationService, private remoteService: RemoteService) { }

  public ngOnInit() {
    this.currentDistanceLoaded = false;
    this.remoteService.get("statistics/currentDistance").subscribe((d) => {
      if (d && d.currentDistance) {
        this.currentDistanceLoaded = true;
        this.currentDistance = d.currentDistance;
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
        this.lastCity.countryName = data.countries.filter((c) => c.code == this.lastCity.country)[0].name;
        this.nextCity.countryName = data.countries.filter((c) => c.code == this.nextCity.country)[0].name;
      }
    });
  }

  public getImg(t) {
    return "https://cdn.pixabay.com/photo/2017/01/29/14/14/skyline-2018079_960_720.jpg";
  }
}
