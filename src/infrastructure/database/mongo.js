import mongoose from 'mongoose';

export const connectMongo = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error("Error: MONGO_URI no está definido en las variables de entorno");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log("Conectado a MongoDB correctamente");
  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
  }
};