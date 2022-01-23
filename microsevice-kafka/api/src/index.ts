import http from "http";
import "dotenv/config";
import express from "express";

const app = express();
const httpServer = http.createServer(app);
const port = process.env.PORT || 3333;

app.get("/", (req, res) => {
  return res.json({ message: "Bem vindo  ao servidor" });
});

httpServer.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
