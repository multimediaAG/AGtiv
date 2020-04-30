import { Router } from "express";
import StatisticsController from "../controllers/StatisticsController";

const router = Router();

router.get("/currentDistance", StatisticsController.currentDistance);
router.get("/currentMap.png", StatisticsController.currentMap);

export default router;
