import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { handlePricingCalculation } from "./controller/product";
dotenv.config();

const app: Express = express();
const port = process.env.BACKEND_PORT || 3000;
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use(express.json());

app.post("/api/v1/profitability-calculator", handlePricingCalculation);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
