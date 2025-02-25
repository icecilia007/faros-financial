import {NextFunction, Request, Response} from "express";
import {
    getAvailableStocks,
    getCompanyInfo,
    getStockDividends,
    getStockHistory,
    getStockInfo
} from "../services/stock.service";

export const getStock = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { ticker } = req.params;
        const stockData = await getStockInfo(ticker);
        res.json(stockData);
    } catch (error) {
        next(error);     }
};

export const getAvailableStocksController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const stocks = await getAvailableStocks();
        res.json(stocks);
    } catch (error) {
        next(error);
    }
};

export const getStockHistoryController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { ticker } = req.params;
        const { range, interval } = req.query;
        const history = await getStockHistory(ticker, range as string, interval as string);
        res.json(history);
    } catch (error) {
        next(error);
    }
};

export const getStockDividendsController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { ticker } = req.params;
        const dividends = await getStockDividends(ticker);
        res.json(dividends);
    } catch (error) {
        next(error);
    }
};

export const getCompanyInfoController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { ticker } = req.params;
        const companyInfo = await getCompanyInfo(ticker);
        res.json(companyInfo);
    } catch (error) {
        next(error);
    }
};