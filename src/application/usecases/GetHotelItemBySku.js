export default class GetHotelItemBySku {
  constructor(hotelItemRepository) {
    this.hotelItemRepository = hotelItemRepository;
  }

  async execute(sku) {
    const item = await this.hotelItemRepository.findBySku(sku);
    if (!item) throw new Error(`Item with SKU "${sku}" not found`);
    return item;
  }
}