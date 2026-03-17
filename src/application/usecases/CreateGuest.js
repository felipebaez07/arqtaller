import Guest from "../../domain/entities/Guest.js";

export default class CreateGuest {

  constructor(guestRepository) {
    this.guestRepository = guestRepository;
  }

  execute(data) {

    const guest = new Guest(
      Date.now().toString(),
      data.name,
      data.email
    );

    return this.guestRepository.create(guest);
  }

}