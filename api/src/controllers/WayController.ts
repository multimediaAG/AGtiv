import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Way } from "../entity/Way";
import { User } from "../entity/User";
import { log } from "../utils/utils";

class WayController {
  public static listAll = async (req: Request, res: Response) => {
    const wayRepository = getRepository(Way);
    const ways = await wayRepository.find({
      where: {
      user: await getRepository(User).findOne(res.locals.jwtPayload.userId),
    }});
    res.send(ways);
  }

  public static editWay = async (req: Request, res: Response) => {
    const wayRepository = getRepository(Way);
    const {distance, date} = req.body;
    if (!(distance && date)) {
      res.status(400).send("Nicht alle Felder wurden ausgefüllt!");
      return;
    }
    try {
      const way = await wayRepository.findOne({where: {id: req.params.way, user: await getRepository(User).findOne(res.locals.jwtPayload.userId)}});
      way.distance = distance;
      way.date = date;
      await wayRepository.save(way);
      log("way edited", { way, userId: res.locals.jwtPayload.userId });
    } catch (err) {
      res.status(500).send({message: err});
      return;
    }
    res.send({status: true});
  }

  public static newWay = async (req: Request, res: Response) => {
    const wayRepository = getRepository(Way);
    const { distance, date } = req.body;
    if (!(date && distance)) {
      res.status(400).send({message: "Nicht alle Felder ausgefüllt!"});
      return;
    }

    let way = new Way();
    way.distance = distance;
    way.date = date;
    way.user = await getRepository(User).findOne(res.locals.jwtPayload.userId);

    try {
      way = await wayRepository.save(way);
      log("way created", { way, userId: res.locals.jwtPayload.userId });
    } catch (e) {
      res.status(500).send({message: `Fehler: ${e.toString()}`});
      return;
    }

    res.status(200).send({status: true});
  }

  public static deleteWay = async (req: Request, res: Response) => {
    const id = req.params.way as any;
    const wayRepository = getRepository(Way);
    try {
      await wayRepository.delete({user: await getRepository(User).findOne(res.locals.jwtPayload.userId), id});
      log("way deleted", { id, userId: res.locals.jwtPayload.userId });
    } catch (error) {
      res.status(404).send({message: "Dieser Weg wurde nicht gefunden!"});
      return;
    }
    res.status(200).send({status: true});
  }
}

export default WayController;
