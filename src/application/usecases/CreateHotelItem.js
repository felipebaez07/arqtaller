import HotelItem from "../../domain/entities/HotelItem.js";
import { v4 as uuidv4 } from "uuid";

export default class CreateHotelItem {
  constructor(hotelItemRepository) {
    this.hotelItemRepository = hotelItemRepository;
  }

  async execute({ name, sku, category, quantity, unitPrice, location }) {
    const item = new HotelItem({
      id: uuidv4(),
      name,
      sku,
      category,
      quantity,
      unitPrice,
      location,
    });
    return await this.hotelItemRepository.save(item);
  }
}