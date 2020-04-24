import { Router } from "express";
import auth from "./auth";
import ways from "./ways";
import user from "./user";

const routes = Router();

routes.use("/auth", auth);
routes.use("/ways", ways);
routes.use("/users", user);

export default routes;
