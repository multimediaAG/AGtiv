import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Way } from "../entity/Way";
import * as path from "path";
import { data } from "../data/ways";
import { fabric } from "fabric";
import { User } from "../entity/User";

class StatisticsController {
  public static currentDistance = async (req: Request, res: Response) => {
    const sum = await StatisticsController.getCurrentDistance();
    const userRepository = getRepository(User);
    const userCount = await userRepository.count();
    let bestUser = await userRepository.query(`
      SELECT user.username, user.grade, Sum(way.distance) AS distance
      FROM user
      LEFT JOIN way
      ON user.id = way.userId AND way.hidden = false
      GROUP BY user.id
      ORDER BY distance DESC
      LIMIT 1;
    `);
    if (bestUser && bestUser[0]) {
      bestUser = bestUser[0];
    }
    const totalDistance = data.cities.reduce((p, c) => p + c.distance, 0);
    res.send({ currentDistance: sum, userCount, bestUser, remainingDistance: totalDistance - sum });
  }

  public static currentMap = async (req: Request, res: Response) => {
    const PRIMARY = "#f1c40f";
    const SECONDARY = "#c0392b";

    const canvas = new fabric.StaticCanvas(undefined);
    fabric.Image.fromURL("file:///" + path.join(__dirname, "../../assets/worldmap.png"), async (img) => {
      canvas.setHeight(img.height);
      canvas.setWidth(img.width);
      canvas.add(img);

      const currentDistance = await StatisticsController.getCurrentDistance();
      const citiesVisited: data.City[] = [];

      let distanceCounter: number = 0;
        for (const city of data.cities) {
            distanceCounter += city.distance;
            if (currentDistance < distanceCounter) {
              break;
            } else {
              citiesVisited.push(city);
            }
        }


      const texts = [];

      for (const city of citiesVisited) {
        if (!city.x) continue;
        canvas.add(new fabric.Circle({
          left: city.x,
          top: city.y,
          fill: SECONDARY,
          stroke: PRIMARY,
          radius: 5,
          strokeWidth: 2,
          originX: "center",
          originY: "center",
        }));
        const textPadding = 1;
        let left = false;
        const t = new fabric.Text(city.name, {
          left: (city.x + 10),
          top: (city.y - 5),
          fontFamily: "Arial",
          fontSize: 10,
        });
        const r = new fabric.Rect({
          left: city.x + 10 - textPadding,
          top: city.y - 5 - textPadding,
          fill: "#fff",
          width: t.width + (2* textPadding) + 4,
          height: t.height + (2 * textPadding),
          opacity: 0.75,
        });
        if (city.angleCCW == true) {
          t.angle = -45;
          r.angle = -45;
          t.originX = "right";
          t.originY = "top";
          r.originX = "right";
          r.originY = "top";
          left = false;
          t.left -= 20;
          r.left -= 17;
          t.top += 10;
          r.top += 7;
        } else if (city.angleCCW === false) {
          t.angle = 45;
          r.angle = 45;
          t.originX = "right";
          t.originY = "top";
          r.originX = "right";
          r.originY = "top";
          left = false;
          t.left -= 10;
          r.left -= 6;
          t.top -= 10;
          r.top -= 6;
          r.width += 3;
        }
        if (city.left) {
          t.left -= t.width + 20;
          r.left -= r.width + 15;
        }
        canvas.add(r);
        texts.push(t);
      }
      canvas.add(...texts);


      let first = true;
      let pathString = "";
      for (const city of citiesVisited) {
        if (!city.x) continue;
        if (city.isWesternStartpoint) {
          pathString += ` M 0 ${city.y}`
          pathString += ` L ${city.x} ${city.y}`
        } else {
          pathString += ` ${first ? "M" : "L"} ${city.x} ${city.y}`
        }
        if (city.isEasternEndpoint) {
          pathString += ` L ${img.width} ${city.y}`
          drawPath(canvas, pathString, SECONDARY);
          pathString = "";
        }
        first = false;
      }
      drawPath(canvas, pathString, SECONDARY);


      canvas.renderAll();
      // @ts-ignore
      const stream = canvas.createPNGStream();
      stream.on('data', (chunk) => {
        res.write(chunk);
      });
      stream.on('end', () => {
        res.end();
      });
      res.contentType(".png");
    });
  }

  private static async getCurrentDistance(): Promise<number> {
    return (await getRepository(Way).createQueryBuilder("way")
      .select("SUM(way.distance)", "sum")
      .where("way.hidden = false")
      .getRawOne()).sum;
  }
}

export default StatisticsController;
function drawPath(canvas: fabric.StaticCanvas, pathString: string, SECONDARY: string) {
  canvas.add(new fabric.Path(pathString, {
    stroke: SECONDARY,
    strokeWidth: 4,
    fill: undefined,
  }));
}

