import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Way } from "../entity/Way";
import * as path from "path";
import { data } from "../data/ways";
import { fabric } from "fabric";

class StatisticsController {
  public static currentDistance = async (req: Request, res: Response) => {
    const sum = await StatisticsController.getCurrentDistance();
    res.send({ currentDistance: sum });
  }

  public static currentMap = async (req: Request, res: Response) => {
    const BLUE = "#3785c4";
    const GREY = "#474747";

    const canvas = new fabric.StaticCanvas(undefined);
    fabric.Image.fromURL("file:///" + path.join(__dirname, "../../assets/worldmap.png"), async (img) => {
      canvas.setHeight(img.height);
      canvas.setWidth(img.width);
      canvas.add(img);

      const currentDistance = await StatisticsController.getCurrentDistance();
      const citiesVisited = [];

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
          fill: GREY,
          stroke: BLUE,
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
        pathString += ` ${first ? "M" : "L"} ${city.x} ${city.y}`
        first = false;
      }
      canvas.add(new fabric.Path(pathString, {
        stroke: GREY,
        strokeWidth: 4,
        fill: undefined,
      }));


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
