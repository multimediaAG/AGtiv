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
        fs.writeFileSync(RoundController.filename, JSON.stringify({ roundId: data.rounds[idx].id, updated: new Date() }));
    }

    public static getRoundIdx(): number {
        const id = JSON.parse(fs.readFileSync(RoundController.filename).toString()).roundId;
        return data.rounds.findIndex((r) => r.id == id);
    }
    public static getRoundIdxUpdatedDate(): Date {
        const d = JSON.parse(fs.readFileSync(RoundController.filename).toString()).updated;
        return new Date(d);
    }

    public static async roundRunning(justToAddWays = false) {
        if (data.rounds[RoundController.getRoundIdx()].cities.reduce((p, c) => p + c.distance, 0) <= await StatisticsController.getCurrentDistance()) {
            if (data.rounds[RoundController.getRoundIdx() + 1].startDate < new Date()) {
                RoundController.setRoundIdx(RoundController.getRoundIdx() + 1);
                return true;
            } else {
                if (justToAddWays && RoundController.isToday(this.getRoundIdxUpdatedDate())) {
                    return true;
                }
                return false;
            }
        } else {
            return true;
        }
    }

    public static isToday(date: Date) {
        const today = new Date();
        return date.getDate() == today.getDate() &&
            date.getMonth() == today.getMonth() &&
            date.getFullYear() == today.getFullYear();
    }
}