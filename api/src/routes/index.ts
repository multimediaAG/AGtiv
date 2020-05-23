import { Router } from "express";
import auth from "./auth";
import ways from "./ways";
import user from "./user";
import statistics from "./statistics";
import { canHaveJwt } from "../middlewares/canHaveJwt";

const routes = Router();

routes.use("/auth", auth);
routes.use("/ways", ways);
routes.use("/users", user);
routes.use("/statistics", [canHaveJwt], statistics);

export default routes;
