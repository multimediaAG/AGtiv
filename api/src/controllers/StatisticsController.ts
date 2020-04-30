import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Way } from "../entity/Way";
import * as path from "path";
import * as fs from "fs";
import * as PureImage from "pureimage";

class StatisticsController {
  public static currentDistance = async (req: Request, res: Response) => {
    const { sum } = await getRepository(Way).createQueryBuilder("way")
      .select("SUM(way.distance)", "sum")
      .where("way.hidden = false")
      .getRawOne();
    res.send({ currentDistance: sum });
  }

  public static currentMap = async (req: Request, res: Response) => {
    const BLUE = "#3785c4";
    const GREY = "#474747";
    PureImage.decodePNGFromStream(fs.createReadStream(path.join(__dirname, "../../assets/worldmap.png"))).then(async (img) => {
      const img2 = PureImage.make(img.width,img.height);
      const c = img2.getContext('2d');
      c.drawImage(img,
          0, 0, img.width, img.height, // source dimensions
          0, 0, img.width, img.height, // destination dimensions
      );
      c.beginPath();
      c.lineWidth = 2;
      const points = [
        [511, 172],
        [500, 191],
        [490, 200],
        [468, 217],
        [465, 234],
        [442, 261],
        [434, 297],
        [446, 314],
        [452, 316],
        [460, 319],
        [471, 322],
        [481, 321],
        [490, 323],
      ];

      c.fillStyle = BLUE;
      for (const [x, y] of points) {
        c.beginPath();
        c.arc(x, y, 5, 0, 2 * Math.PI);
        c.fill();
      }

      c.fillStyle = c.strokeStyle = GREY;
      for (const [x, y] of points) {
        c.beginPath();
        c.arc(x, y, 3, 0, 2 * Math.PI);
        c.fill();
      }


      c.moveTo(points[0][0], points[0][1]);
      for (const [x, y] of points) {
        c.lineTo(x, y);
      }
      c.stroke();

      await new Promise((resolve, reject) => {
        PureImage.registerFont(path.join(__dirname, "../../assets/verdana.ttf"), "Verdana", 100, "normal", "normal").load(() => {
          resolve();
        });
      });
      await new Promise((resolve, reject) => {
        PureImage.registerFont(path.join(__dirname, "../../assets/verdanab.ttf"), "Verdana", 100, "bold", "bold").load(() => {
          resolve();
        });
      });

      res.contentType(".png");
      res.set("Content-Disposition", "inline;");
      PureImage.encodePNGToStream(img2, res);
  });
  }
}

export default StatisticsController;
