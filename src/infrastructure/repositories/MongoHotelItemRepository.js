import HotelItemRepository from "../../domain/repositories/HotelItemRepository.js";
import HotelItemModel      from "../database/models/HotelItemModel.js";

export default class MongoHotelItemRepository extends HotelItemRepository {
  async save(item) {
    await HotelItemModel.findOneAndUpdate(
      { id: item.id },
      item,
      { upsert: true, new: true }
    );
    return item;
  }

  async findAll() {
    return await HotelItemModel.find().lean();
  }

  async findBySku(sku) {
    return await HotelItemModel.findOne({ sku }).lean() ?? null;
  }

  async delete(id) {
    const result = await HotelItemModel.findOneAndDelete({ id });
    if (!result) throw new Error(`Item with id "${id}" not found`);
  }
}