import 'dotenv/config'; // Forma más limpia de cargar variables
import app from "./app.js";
import { connectMongo } from "./infrastructure/database/mongo.js";

const PORT = process.env.PORT || 3000;

// 1. Primero cargamos variables, luego conectamos, luego levantamos el servidor
try {
  await connectMongo();
  app.listen(PORT, () => console.log(`Servidor activo en puerto ${PORT}`));
} catch (error) {
  console.error("No se pudo iniciar el servidor:", error);
}