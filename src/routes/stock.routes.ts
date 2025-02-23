import { Router } from "express";
import {
    getAvailableStocksController, getCompanyInfoController,
    getStock,
    getStockDividendsController,
    getStockHistoryController
} from "../controllers/stock.controller";

const router = Router();

router.get("/:ticker", getStock);
router.get("/", getAvailableStocksController);
router.get("/:ticker/history", getStockHistoryController);
router.get("/:ticker/dividends", getStockDividendsController);
router.get("/:ticker/company", getCompanyInfoController);


export default router;
