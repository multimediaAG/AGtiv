import { Component } from "@angular/core";
import { AuthenticationService } from "src/app/services/authentication.service";
import { RemoteService } from "src/app/services/remote.service";
import { Label } from "ng2-charts";
import { ChartDataSets, ChartOptions } from "chart.js";
import { DatePipe } from "@angular/common";

interface Day { date: string, distance: string };

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
    public myDistanceData: ChartDataSets[] = [
        { data: [], label: "" },
    ];
    public lineChartLabels: Label[] = [];
    public lineChartOptions: ChartOptions = {
        responsive: true,
    };
    public lineChartLegend = true;
    constructor(public authenticationService: AuthenticationService, private remoteService: RemoteService, private datePipe: DatePipe) { }

    public ngOnInit() {
        this.remoteService.get("statistics").subscribe((d: {days: Day[], myDays: Day[]}) => {
            if (d && d.days) {
                const firstDay = d.days[0].date;
                const length = d.days.length;

                d.days = this.fixTimezoneProblems(d.days);
                d.myDays = this.fixTimezoneProblems(d.myDays);

                this.distanceData = [
                    {
                        data: this.fixMissingDays(d.days, firstDay, length).map((day) => parseInt(day.distance, undefined)),
                        label: "Fahrradkilometer der gesamten Schulgemeinschaft",
                        borderColor: "rgb(41, 128, 185)",
                        backgroundColor: "rgb(69, 170, 242)",
                        pointBackgroundColor: "rgb(0, 0, 0)",
                        pointHoverBackgroundColor: "rgb(255, 255, 255)",
                        pointHoverBorderColor: "rgb(0, 0, 0)",
                    }
                ];
                if (d.myDays) {
                    this.myDistanceData = [
                        {
                            data: this.fixMissingDays(d.myDays, firstDay, length).map((day) => parseInt(day.distance, undefined)),
                            label: `Fahrradkilometer von ${this.authenticationService.currentUser.username}`,
                            borderColor: "rgb(32, 191, 107)",
                            backgroundColor: "rgb(38, 222, 129)",
                            pointBackgroundColor: "rgb(0, 0, 0)",
                            pointHoverBackgroundColor: "rgb(255, 255, 255)",
                            pointHoverBorderColor: "rgb(0, 0, 0)",
                        }
                    ];
                }
                this.lineChartLabels = d.days.map((day) => this.datePipe.transform(day.date, "d. MMM"));
            }
        });
    }

    private fixTimezoneProblems(days: Day[]): Day[] {
        return days.map((day) => {
            const date = new Date(day.date);
            date.setHours(12);
            day.date = date.toISOString();
            return day;
        });
    }

    private fixMissingDays(input: Day[], firstDay, length) {
        const output: Day[] = [];
        let lastDate = firstDay;
        for (const day of input) {
            const diff = Math.ceil(Math.abs(new Date(lastDate).getTime() - new Date(day.date).getTime()) / (1000 * 3600 * 24));
            if (diff > 1) {
                for (let i = 0; i < (diff - 1); i++) {
                    output.push({ date: this.addDays(new Date(lastDate), i+1).toISOString(), distance: "0"});
                }
            }
            output.push(day);
            lastDate = day.date;
        }
        const lengthDiff = length - output.length;
        if (lengthDiff > 0) {
            for (let i = 0; i < lengthDiff; i++) {
                output.push({ date: undefined, distance: "0"});
            }
        }
        return output;
    }

    private addDays (d: Date, days: number) {
        const date = new Date(d.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }
}
