import { Schema, model } from "mongoose";

const hotelItemSchema = new Schema({
  id:        { type: String, required: true, unique: true },
  name:      { type: String, required: true },
  sku:       { type: String, required: true, unique: true },
  category:  { type: String, required: true },
  quantity:  { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  location:  { type: String, default: "" },
}, { timestamps: true });

export default model("HotelItem", hotelItemSchema); 