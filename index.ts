import express from "express";
import http from "http";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const httpServer = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const port: number = Number(process.env.PORT) || 4000;

httpServer.listen(port, () => {
    console.log(`Listening on port ${port}`);
})