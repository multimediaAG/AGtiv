import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";
import * as path from "path";
import { createConnection } from "typeorm";
import { config } from "./config/config";
import { User } from "./entity/User";
import { Way } from "./entity/Way";
import { createAdminUser1574018391679 } from "./migration/1574018391679-createAdminUser";
import routes from "./routes";
import { toInt, log } from "./utils/utils";
import * as fs from "fs";

// Connects to the Database -> then starts the express
createConnection({
  charset: "utf8mb4",
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
  database: config.database_name,
  // List all your entities here
  entities: [
    User,
    Way,
  ],
  host: config.database_host,
  logging: false,
  // List all your migrations here
  migrations: [createAdminUser1574018391679],
  migrationsRun: true,
  password: config.database_password,
  port: toInt(config.database_port),
  synchronize: true,
  type: "mysql",
  username: config.database_user,
})
  .then(async (connection) => {

    if (!fs.existsSync("/data")) fs.mkdirSync("/data");
    if (!fs.existsSync(path.join("/data/agtiv.log"))) fs.writeFileSync(path.join("/data/agtiv.log"), "");
    log("server started", null);

    // Fix problems with UTF8 chars
    await connection.query("SET NAMES utf8mb4;");
    // In case entities have changed, sync the database
    await connection.synchronize();
    // Run migrations, see https://github.com/typeorm/typeorm/blob/master/docs/migrations.md
    // tslint:disable-next-line: no-console
    console.log("Migrations: ", await connection.runMigrations());
    // Create a new express application instance
    const app = express();

    // Call midlewares
    // This sets up secure rules for CORS, see https://developer.mozilla.org/de/docs/Web/HTTP/CORS
    app.use(cors());
    // This secures the app with some http headers
    app.use(helmet());
    // This transforms the incoming JSON body into objects
    app.use(bodyParser.json());

    // Set all routes from routes folder
    app.use("/api", routes);

    // Set routes for static built frontend
    app.use("/", express.static(path.join(__dirname, "../../frontend_build")));
    app.use("*", express.static(path.join(__dirname, "../../frontend_build/index.html")));

    // That starts the server on the given port
    app.listen(config.port, () => {
      // tslint:disable-next-line: no-console
      console.log(`Server started on port ${config.port}!`);
    });
  })
  // If an error happens, print it on the console
  // tslint:disable-next-line: no-console
  .catch((error) => console.log(error));
