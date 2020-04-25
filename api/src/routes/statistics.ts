import { Router } from "express";
import StatisticsController from "../controllers/StatisticsController";

const router = Router();

router.get("/currentDistance", StatisticsController.currentDistance);

export default router;
