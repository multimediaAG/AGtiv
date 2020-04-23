import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { isArray } from "util";
import { Way } from "../entity/Way";

class WayController {
  public static listAll = async (req: Request, res: Response) => {
    const wayRepository = getRepository(Way);
    const ways = await wayRepository.find();
    res.send(ways);
  }

  public static editWay = async (req: Request, res: Response) => {
    const wayRepository = getRepository(Way);
    const {name} = req.body;
    if (name == undefined) {
      res.status(400).send("Nicht alle Felder wurden ausgefüllt!");
      return;
    }
    try {
      const way = await wayRepository.findOne({where: {guid: req.params.guid}});
      way.length = length;
      wayRepository.save(way);
    } catch (err) {
      res.status(500).send({message: err});
      return;
    }
    res.send({status: true});
  }

  public static newWays = async (req: Request, res: Response) => {
    const wayRepository = getRepository(Way);
    let { ways } = req.body;
    if (!(ways && isArray(ways) && ways.length > 0)) {
      res.status(400).send({message: "Nicht alle "});
      return;
    }
    ways = ways.map((t) => {
      return {
        activated: false,
        guid: t.guid,
        name: t.name,
      };
    });

    try {
      await wayRepository.save(ways);
    } catch (e) {
      res.status(500).send({message: `Fehler: ${e.toString()}`});
      return;
    }

    res.status(200).send({status: true});
  }

  public static deleteWay = async (req: Request, res: Response) => {
    const id = req.params.id as any;
    const wayRepository = getRepository(Way);
    try {
      await wayRepository.delete({id});
    } catch (error) {
      res.status(404).send({message: "Dieser Weg wurde nicht gefunden!"});
      return;
    }
    res.status(200).send({status: true});
  }
}

export default WayController;
