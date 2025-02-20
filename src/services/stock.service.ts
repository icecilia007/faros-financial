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
