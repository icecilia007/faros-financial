import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import stockRoutes from "./routes/stock.routes";
import homeRoutes from "./routes/home.routes";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });
console.log("PORT definida no .env:", process.env.PORT);
console.log("TOKEN definida no .env:", process.env.BRAPI_TOKEN);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/stocks", stockRoutes);
app.use("/api/home", homeRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
