import { brapiClient } from "../config/brapi";

export const getStockInfo = async (ticker: string) => {
    try {
        const response = await brapiClient.get(`/quote/${ticker}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados da ação:", error);
        throw new Error("Erro ao buscar dados da ação");
    }
};

export const getAvailableStocks = async () => {
    try {
        const response = await brapiClient.get("/available");
        return response.data.stocks;
    } catch (error) {
        console.error("Erro ao buscar lista de ações:", error);
        throw new Error("Erro ao buscar lista de ações");
    }
};

export const getStockHistory = async (ticker: string, range: string, interval: string) => {
    try {
        const response = await brapiClient.get(`/quote/${ticker}/history`, {
            params: { range, interval },
        });
        return response.data.results;
    } catch (error) {
        console.error("Erro ao buscar histórico da ação:", error);
        throw new Error("Erro ao buscar histórico da ação");
    }
};

export const getStockDividends = async (ticker: string) => {
    try {
        const response = await brapiClient.get(`/dividends/${ticker}`);
        return response.data.results;
    } catch (error) {
        console.error("Erro ao buscar dividendos da ação:", error);
        throw new Error("Erro ao buscar dividendos da ação");
    }
};

export const getCompanyInfo = async (ticker: string) => {
    try {
        const response = await brapiClient.get(`/company/${ticker}`);
        return response.data.results;
    } catch (error) {
        console.error("Erro ao buscar informações da empresa:", error);
        throw new Error("Erro ao buscar informações da empresa");
    }
};