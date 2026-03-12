import { Schema, model } from "mongoose";

// Definición del esquema
const roomSchema = new Schema({
  number: { 
    type: String, 
    required: true, 
    unique: true 
  },
  type: { 
    type: String, 
    required: true,
    enum: ['simple', 'doble', 'suite', 'deluxe'] 
  },
  price: { 
    type: Number, 
    required: true,
    min: 0 
  },
  capacity: { 
    type: Number, 
    required: true,
    min: 1 
  },
  status: { 
    type: String, 
    required: true,
    default: 'available',
    enum: ['available', 'occupied', 'maintenance'] 
  }
}, {
  timestamps: true,
  versionKey: false // Opcional: elimina el campo __v de la base de datos
});

// Exportación única como default
const RoomModel = model('Room', roomSchema);
export default RoomModel;