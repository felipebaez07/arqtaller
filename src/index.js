import "dotenv/config";
import app from "./app.js";
import { connectMongo } from "./infrastructure/database/mongo.js";

await connectMongo();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});