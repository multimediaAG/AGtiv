import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/authentication.service";
import { RemoteService } from "src/app/services/remote.service";
import { Color, BaseChartDirective, Label } from "ng2-charts";
import { ChartDataSets, ChartOptions } from "chart.js";
import { DatePipe } from "@angular/common";
import { R3TargetBinder } from '@angular/compiler';

@Component({
    selector: "app-statistics",
    templateUrl: "./statistics.component.html",
    styleUrls: ["./statistics.component.scss"],
    providers: [DatePipe],
})
export class StatisticsComponent {
    public distanceData: ChartDataSets[] = [
        { data: [], label: "" },
    ];
    public userCountData: ChartDataSets[] = [
        { data: [], label: "" },
    ];
    public lineChartLabels: Label[] = [];
    public lineChartOptions: ChartOptions = {
        responsive: true,
    };
    public lineChartLegend = true;
    constructor(public authenticationService: AuthenticationService, private remoteService: RemoteService, private datePipe: DatePipe) { }

    public ngOnInit() {
        this.remoteService.get("statistics").subscribe((d) => {
            if (d && d.days) {
                this.distanceData = [
                    {
                        data: d.days.map((day) => parseInt(day.distance, undefined)),
                        label: "Fahrradkilometer",
                        borderColor: "rgb(41, 128, 185)",
                        backgroundColor: "rgb(69, 170, 242)",
                        pointBackgroundColor: "rgb(0, 0, 0)",
                        pointHoverBackgroundColor: "rgb(255, 255, 255)",
                        pointHoverBorderColor: "rgb(0, 0, 0)",
                    }
                ];
                this.userCountData = [
                    {
                        data: d.days.map((day) => parseInt(day.users, undefined)),
                        label: "Aktive Benutzer",
                        borderColor: "rgb(32, 191, 107)",
                        backgroundColor: "rgb(38, 222, 129)",
                        pointBackgroundColor: "rgb(0, 0, 0)",
                        pointHoverBackgroundColor: "rgb(255, 255, 255)",
                        pointHoverBorderColor: "rgb(0, 0, 0)",
                    }
                ];
                this.lineChartLabels = d.days.map((day) => this.datePipe.transform(day.date, "d. MMM"));
                console.log(this.distanceData)
            }
        });
    }
}
