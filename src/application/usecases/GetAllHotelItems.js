export default class GetAllHotelItems {
  constructor(hotelItemRepository) {
    this.hotelItemRepository = hotelItemRepository;
  }

  async execute() {
    return await this.hotelItemRepository.findAll();
  }
}