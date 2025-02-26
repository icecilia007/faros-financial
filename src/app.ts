import express from "express";
import cors from "cors";
import stockRoutes from "./routes/stock.routes";
import homeRoutes from "./routes/home.routes";
import { errorHandler } from "./middlewares/error";

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/stocks", stockRoutes);
app.use("/api/home", homeRoutes);

app.use((err: unknown, req: express.Request, res: express.Response, next: express.NextFunction) => {
    errorHandler(err, req, res, next);
});

export default app;