import { Router } from "express";
import WayController from "../controllers/WayController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();

router.get("/", [checkJwt], WayController.listAll);
router.post("/", [checkJwt], WayController.newWays);
router.post("/:id", [checkJwt], WayController.editWay);
router.delete("/:id", [checkJwt], WayController.deleteWay);

export default router;
