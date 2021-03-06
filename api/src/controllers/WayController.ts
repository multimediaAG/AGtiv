import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Way } from "../entity/Way";
import { User } from "../entity/User";
import { log } from "../utils/utils";
import { RoundController } from "./RoundController";

class WayController {
    public static listAll = async (req: Request, res: Response) => {
        const wayRepository = getRepository(Way);
        const ways = await wayRepository.find({
            where: {
                user: await getRepository(User).findOne(res.locals.jwtPayload.userId),
                roundIdx: parseInt(req.params.roundIdx, undefined),
            }
        });
        res.send(ways);
    }

    public static editWay = async (req: Request, res: Response) => {
        if (!await RoundController.roundRunning(true)) {
            WayController.roundFinishedMessage(res);
            return;
        }
        const wayRepository = getRepository(Way);
        const { distance, date, type } = req.body;
        if (!(distance && date)) {
            res.status(400).send("Nicht alle Felder wurden ausgefüllt!");
            return;
        }
        try {
            const way = await wayRepository.findOne({ where: { id: req.params.way, user: await getRepository(User).findOne(res.locals.jwtPayload.userId) } });
            way.distance = distance;
            way.date = date;
            way.type = type;
            way.hidden = false;
            await wayRepository.save(way);
            log("way edited", { way, userId: res.locals.jwtPayload.userId });
        } catch (err) {
            res.status(500).send({ message: err });
            return;
        }
        RoundController.staticUpdateRoundIdxUpdatedDate();
        res.send({ status: true });
    }

    public static newWay = async (req: Request, res: Response) => {
        if (!await RoundController.roundRunning(true)) {
            WayController.roundFinishedMessage(res);
            return;
        }
        const wayRepository = getRepository(Way);
        const { distance, date, type } = req.body;
        if (!(date && distance && type)) {
            res.status(400).send({ message: "Nicht alle Felder ausgefüllt!" });
            return;
        }

        let way = new Way();
        way.distance = distance;
        way.date = date;
        way.type = type;
        way.roundIdx = RoundController.getRoundIdx();
        way.user = await getRepository(User).findOne(res.locals.jwtPayload.userId);

        try {
            way = await wayRepository.save(way);
            log("way created", { way, userId: res.locals.jwtPayload.userId });
        } catch (e) {
            res.status(500).send({ message: `Fehler: ${e.toString()}` });
            return;
        }
        RoundController.staticUpdateRoundIdxUpdatedDate();
        res.status(200).send({ status: true });
    }

    public static deleteWay = async (req: Request, res: Response) => {
        if (!await RoundController.roundRunning(true)) {
            WayController.roundFinishedMessage(res);
            return;
        }
        const id = req.params.way as any;
        const wayRepository = getRepository(Way);
        try {
            await wayRepository.delete({ user: await getRepository(User).findOne(res.locals.jwtPayload.userId), id });
            log("way deleted", { id, userId: res.locals.jwtPayload.userId });
        } catch (error) {
            res.status(404).send({ message: "Diese Strecke wurde nicht gefunden!" });
            return;
        }
        res.status(200).send({ status: true });
    }

    private static roundFinishedMessage(res: Response) {
        res.status(400).send({ message: "Die Runde ist schon vorbei, es können keine Strecken mehr eingetragen werden!" });
    }
}

export default WayController;
