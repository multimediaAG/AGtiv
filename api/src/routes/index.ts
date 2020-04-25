import { Router } from "express";
import auth from "./auth";
import ways from "./ways";
import user from "./user";
import statistics from "./statistics";

const routes = Router();

routes.use("/auth", auth);
routes.use("/ways", ways);
routes.use("/users", user);
routes.use("/statistics", statistics);

export default routes;
