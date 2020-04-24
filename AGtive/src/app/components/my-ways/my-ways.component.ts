import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-ways',
  templateUrl: './my-ways.component.html',
  styleUrls: ['./my-ways.component.scss']
})
export class MyWaysComponent implements OnInit {
  public maxDistance: number = 1000;
  public myWays = [
    {
      distance: 5,
      date: new Date(),
    },
    {
      distance: 1,
      date: new Date(),
    },
    {
      distance: 20,
      date: new Date(),
    },
    {
      distance: 4,
      date: new Date(),
    }
  ]
  constructor() { }

  ngOnInit(): void {
    this.maxDistance = this.myWays.reduce((p, c) => p.distance > c.distance ? p : c).distance;
  }

}
