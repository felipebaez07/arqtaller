import express          from "express";
import cors             from "cors";
import hotelItemRoutes  from "./infrastructure/routes/hotelItemRoutes.js";
import { hotelItemController } from "./infrastructure/config/container.js";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api", hotelItemRoutes(hotelItemController));

export default app;