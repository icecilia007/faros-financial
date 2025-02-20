import axios from "axios";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const BRAPI_URL = "https://brapi.dev/api";

export const brapiClient = axios.create({
    baseURL: BRAPI_URL,
    params: {
        token: process.env.BRAPI_TOKEN,
    },
});

brapiClient.interceptors.request.use((config) => {
    console.log("Requisição sendo enviada:", {
        url: config.url,
        method: config.method,
        params: config.params,
        headers: config.headers,
        data: config.data,
    });
    return config;
});

brapiClient.interceptors.response.use((response) => {
    console.log("Resposta recebida:", {
        status: response.status,
        data: response.data,
    });
    return response;
});