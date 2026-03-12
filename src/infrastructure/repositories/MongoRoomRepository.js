import RoomRepository from "../../domain/repositories/RoomRepository.js";
import RoomModel      from "../database/models/RoomModel.js";

export default class MongoRoomRepository extends RoomRepository {
  
  async save(room) {
    // Usamos 'number' como clave única para el upsert según tu lógica de negocio
    await RoomModel.findOneAndUpdate(
      { number: room.number },
      {
        number: room.number,
        type: room.type,
        price: room.price,
        capacity: room.capacity,
        status: room.status
      },
      { upsert: true, new: true }
    );
    return room;
  }

  async findAll() {
    const rooms = await RoomModel.find();
    // Opcional: Aquí podrías mapear los documentos de Mongoose a tu clase Room
    return rooms;
  }

  async findByNumber(number) {
    // Cambié findBySku por findByNumber para que coincida con tu constructor
    return await RoomModel.findOne({ number }) ?? null;
  }

  async delete(number) {
    const result = await RoomModel.findOneAndDelete({ number });
    if (!result) {
      throw new Error(`Room with number "${number}" not found`);
    }
    return true;
  }
}