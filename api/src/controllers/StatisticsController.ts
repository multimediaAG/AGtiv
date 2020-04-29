import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Way } from "../entity/Way";

class StatisticsController {
  public static currentDistance = async (req: Request, res: Response) => {
    const { sum } = await getRepository(Way).createQueryBuilder("way")
      .select("SUM(way.distance)", "sum")
      .where("way.hidden = false")
      .getRawOne();
    res.send({ currentDistance: sum });
  }
}

export default StatisticsController;
