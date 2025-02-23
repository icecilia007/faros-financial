import { Router } from "express";

const router = Router();

router.get("/tabs", (req, res) => {
    const tabs = [
        { id: 1, name: "Ações", route: "/stocks" },
        { id: 2, name: "Criptomoedas", route: "/crypto" },
        { id: 3, name: "Fundos Imobiliários", route: "/fii" },
        { id: 4, name: "ETFs", route: "/etf" },
        { id: 5, name: "Taxas de Juros", route: "/taxes" },
    ];
    res.json(tabs);
});

export default router;