import express from "express";
import cors from "cors";
import stockRoutes from "./routes/stock.routes";
import homeRoutes from "./routes/home.routes";

import { config } from './config/config';

console.log("PORT definida no .env:", config.PORT);
console.log("TOKEN definida no .env:", config.BRAPI_TOKEN);

const app = express();
const PORT = config.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/stocks", stockRoutes);
app.use("/api/home", homeRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
