import { AxiosError } from "axios";
import { ApiError } from "../exceptions/ApiError";

export const handleApiError = (error: unknown): never => {
    const axiosError = error as AxiosError;

    const errorMessage = (axiosError.response?.data as { message?: string })?.message || "Erro desconhecido";
    const statusCode = axiosError.response?.status ?? 500;

    console.error(`Erro na API: ${errorMessage} (Status: ${statusCode})`);

    throw new ApiError(errorMessage, statusCode);
};
