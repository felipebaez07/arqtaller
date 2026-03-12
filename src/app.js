import express from "express";
import { roomController } from "../src/infrastructure/config/container.js";
import indexRouter from "../src/infrastructure/routes/indexRouter.js"

const app = express();

app.use(express.json());

app.use("/api", indexRouter(roomController));

export default app;