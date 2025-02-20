import { Router } from "express";
import { getStock } from "../controllers/stock.controller";

const router = Router();

router.get("/:ticker", getStock);

export default router;
