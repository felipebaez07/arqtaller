export default class GuestController {

  constructor({ createGuest, getAllGuests }) {
    this.createGuest = createGuest;
    this.getAllGuests = getAllGuests;
  }

  create(req, res) {
    const guest = this.createGuest.execute(req.body);
    res.json(guest);
  }

  getAll(req, res) {
    const guests = this.getAllGuests.execute();
    res.json(guests);
  }

}

