import GuestModel from "../database/models/GuestModel.js";

export default class MongoGuestRepository {

  async create(guest) {
    const newGuest = await GuestModel.create(guest);
    return newGuest;
  }

  async getAll() {
    return await GuestModel.find();
  }

}