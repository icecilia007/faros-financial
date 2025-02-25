import { AppError } from "./AppError";

export class ApiError extends AppError {
    constructor(message: string, statusCode: number = 500) {
        super(message, statusCode);
    }
}
