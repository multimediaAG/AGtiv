import { Router } from "express";
import WayController from "../controllers/WayController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();

router.get("/", [checkJwt], WayController.listAll);
router.post("/", [checkJwt], WayController.newWay);
router.post("/:way", [checkJwt], WayController.editWay);
router.delete("/:way", [checkJwt], WayController.deleteWay);

export default router;
