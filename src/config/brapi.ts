import axios from "axios";
import { config } from './config';

const BRAPI_URL = "https://brapi.dev/api";

export const brapiClient = axios.create({
    baseURL: BRAPI_URL,
    params: {
        token: config.BRAPI_TOKEN,
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