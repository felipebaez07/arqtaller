export default class GetAllGuests {

  constructor(guestRepository) {
    this.guestRepository = guestRepository;
  }

  execute() {
    return this.guestRepository.getAll();
  }

}   