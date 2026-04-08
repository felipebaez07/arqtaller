export default class DeleteHotelItem {
  constructor(hotelItemRepository) {
    this.hotelItemRepository = hotelItemRepository;
  }

  async execute(id) {
    return await this.hotelItemRepository.delete(id);
  }
}