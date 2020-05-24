import * as fs from "fs";
import { data } from "../data/rounds";
import StatisticsController from "./StatisticsController";

export class RoundController {
    private static readonly filename: string = "/data/currentRound";
    public static init() {
        if (!fs.existsSync(RoundController.filename)) {
            RoundController.setRoundIdx(0);
        }
    }

    private static setRoundIdx(idx: number) {
        fs.writeFileSync(RoundController.filename, JSON.stringify({ roundId: data.rounds[idx].id }));
    }

    public static getRoundIdx(): number {
        const id = JSON.parse(fs.readFileSync(RoundController.filename).toString()).roundId;
        return data.rounds.findIndex((r) => r.id == id);
    }

    public static async roundRunning() {
        if (data.rounds[RoundController.getRoundIdx()].cities.reduce((p, c) => p + c.distance, 0) <= await StatisticsController.getCurrentDistance()) {
            if (data.rounds[RoundController.getRoundIdx() + 1].startDate < new Date()) {
                RoundController.setRoundIdx(RoundController.getRoundIdx() + 1);
                console.log("round idx updated to", RoundController.getRoundIdx());
                return true;
            } else {
                console.log("finished but next round not started yet");
                return false;
            }
        } else {
            console.log("round total distance not reached yet")
            return true;
        }
    }
}