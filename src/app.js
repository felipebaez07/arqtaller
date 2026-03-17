import express from "express";

import { roomController, guestController } from "./infrastructure/config/container.js";

import indexRouter from "./infrastructure/routes/indexRouter.js";
import guestRoutes from "./infrastructure/routes/guestRoutes.js";

const app = express();

app.use(express.json());

app.use("/api", indexRouter(roomController));
app.use("/api", guestRoutes(guestController));

export default app;