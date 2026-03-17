export default class InMemoryGuestRepository {

  constructor() {
    this.guests = [];
  }

  create(guest) {
    this.guests.push(guest);
    return guest;
  }

  getAll() {
    return this.guests;
  }

}