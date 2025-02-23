import { Request, Response } from "express";
import {
    getAvailableStocks,
    getCompanyInfo,
    getStockDividends,
    getStockHistory,
    getStockInfo
} from "../services/stock.service";

export const getStock = async (req: Request, res: Response) => {
    try {
        const { ticker } = req.params;
        const stockData = await getStockInfo(ticker);
        res.json(stockData);
    } catch (error) {
        console.error("Erro no controltler:", error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Erro desconhecido ao buscar ação." });
        }
    }
};

export const getAvailableStocksController = async (req: Request, res: Response) => {
    try {
        const stocks = await getAvailableStocks();
        res.json(stocks);
    } catch (error) {
        console.error("Erro no controlador de lista de ações:", error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Erro desconhecido ao buscar lista de ações." });
        }
    }
};

export const getStockHistoryController = async (req: Request, res: Response) => {
    try {
        const { ticker } = req.params;
        const { range, interval } = req.query;
        const history = await getStockHistory(ticker, range as string, interval as string);
        res.json(history);
    } catch (error) {
        console.error("Erro no controlador de histórico:", error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Erro desconhecido ao buscar histórico." });
        }
    }
};

export const getStockDividendsController = async (req: Request, res: Response) => {
    try {
        const { ticker } = req.params;
        const dividends = await getStockDividends(ticker);
        res.json(dividends);
    } catch (error) {
        console.error("Erro no controlador de dividendos:", error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Erro desconhecido ao buscar dividendos." });
        }
    }
};

export const getCompanyInfoController = async (req: Request, res: Response) => {
    try {
        const { ticker } = req.params;
        const companyInfo = await getCompanyInfo(ticker);
        res.json(companyInfo);
    } catch (error) {
        console.error("Erro no controlador de informações da empresa:", error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Erro desconhecido ao buscar informações da empresa." });
        }
    }
};