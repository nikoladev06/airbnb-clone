import "dotenv/config";
import express from "express";
import { connectDb } from "./config/db";

const app = express();
const { PORT } = process.env;

app.get("/", (req, res) => {
  res.json({ ola: "Olá mundo" });
});

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
