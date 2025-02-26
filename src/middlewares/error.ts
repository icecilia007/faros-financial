import { Request, Response, NextFunction } from "express";
import { ApiError } from "../exceptions/ApiError";

export const errorHandler = (
    error: unknown,
    req: Request,
    res: Response,
    next: NextFunction
) => {    console.error("Erro no servidor:", error);

    if (error instanceof ApiError) {
        return res.status(error.statusCode).json({ error: error.message });
    }

    if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
    }

    return res.status(500).json({ error: "Erro interno do servidor." });
};
