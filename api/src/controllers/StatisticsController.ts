import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Way } from "../entity/Way";
import * as path from "path";
import { data } from "../data/ways";
import { fabric } from "fabric";

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
    const scaleFactor = 2;

    const canvas = new fabric.StaticCanvas(undefined);
    fabric.Image.fromURL("file:///" + path.join(__dirname, "../../assets/worldmap.png"), (img) => {
      img.scaleToHeight(img.height * 2);
      canvas.setHeight(img.height * 2);
      canvas.setWidth(img.width * 2);
      canvas.add(img);


      const texts = [];
      let lastTextBorders;

      for (const city of data.cities) {
        if (!city.x) continue;
        canvas.add(new fabric.Circle({
          left: city.x * scaleFactor,
          top: city.y * scaleFactor,
          fill: GREY,
          stroke: BLUE,
          radius: 5 * scaleFactor,
          strokeWidth: 2 * scaleFactor,
          originX: "center",
          originY: "center",
        }));
        const textPadding = 1;
        let left = false;
        if (lastTextBorders && (lastTextBorders[0] > (city.x + 10 - textPadding) * scaleFactor || lastTextBorders[1] > (city.y - 5 - textPadding) * scaleFactor)) {
          left = true;
        }
        const t = new fabric.Text(city.name, {
          left: (city.x + 10) * scaleFactor,
          top: (city.y - 5) * scaleFactor,
          fontFamily: "Arial",
          fontSize: 10 * scaleFactor,
        });
        const r = new fabric.Rect({
          left: (city.x + 10 - textPadding) * scaleFactor,
          top: (city.y - 5 - textPadding) * scaleFactor,
          fill: "#fff",
          width: (t.width + (2* textPadding) + 4),
          height: (t.height + (2 * textPadding)),
          opacity: 0.75,
        });
        if (left) {
          t.left -= t.width + (20 * scaleFactor);
          r.left -= r.width + (20 * scaleFactor);
        }
        lastTextBorders = [r.left, r.top, r.left + r.width, r.top + r.height];
        canvas.add(r);
        texts.push(t);
      }
      canvas.add(...texts);


      let first = true;
      let pathString = "";
      for (const city of data.cities) {
        if (!city.x) continue;
        pathString += ` ${first ? "M" : "L"} ${city.x * scaleFactor} ${city.y * scaleFactor}`
        first = false;
      }
      canvas.add(new fabric.Path(pathString, {
        stroke: GREY,
        strokeWidth: 4 * scaleFactor,
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

    /*PureImage.decodePNGFromStream(fs.createReadStream(path.join(__dirname, "../../assets/worldmap.png"))).then(async (img) => {
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
  });*/
  }
}

export default StatisticsController;
