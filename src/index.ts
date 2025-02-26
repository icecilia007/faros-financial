import { config } from './config/config';
import app from './app';

const PORT = config.PORT || 3000;

console.log("PORT definida no .env:", config.PORT);
console.log("TOKEN definida no .env:", config.BRAPI_TOKEN);

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});