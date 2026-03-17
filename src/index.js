import "dotenv/config";
import app from "../src/app.js";
import { connectMongo } from "./infrastructure/database/mongo.js";

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await connectMongo();
    app.listen(PORT, () => {
      console.log(`Servidor activo en puerto ${PORT}`);
    });
  } catch (error) {
    console.error("No se pudo iniciar el servidor:", error);
  }
}

startServer();