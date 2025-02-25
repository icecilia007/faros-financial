import { brapiClient } from "../config/brapi";
import { handleApiError } from "../utils/errorHandler";
export const getStockInfo = async (ticker: string) => {
    try {
        const response = await brapiClient.get(`/quote/${ticker}`);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

export const getAvailableStocks = async () => {
    try {
        const response = await brapiClient.get("/available");
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

export const getStockHistory = async (ticker: string, range: string, interval: string) => {
    try {
        const response = await brapiClient.get(`/quote/${ticker}`, {
            params: {
                range: range,
                interval: interval,
            },
        });
        return response.data.results;
    } catch (error) {
        handleApiError(error);
    }
};

export const getStockDividends = async (ticker: string) => {
    try {
        const response = await brapiClient.get(`/quote/${ticker}`, {
            params: { dividends: true },
        });
        return response.data.results;
    } catch (error) {
        handleApiError(error);
    }
};

export const getCompanyInfo = async (ticker: string) => {
    try {
        const response = await brapiClient.get(`/quote/${ticker}`,{
            params: {
                modules: 'summaryProfile',
            },
        });
        return response.data.results;
    } catch (error) {
        handleApiError(error);
    }
};