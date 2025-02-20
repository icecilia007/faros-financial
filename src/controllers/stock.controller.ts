import { Request, Response } from "express";
import { getStockInfo } from "../services/stock.service";

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
