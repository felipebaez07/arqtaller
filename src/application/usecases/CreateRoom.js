import Room from "../../domain/entities/Room.js";

export default class CreateRoom {

  constructor(roomRepository) {
    this.roomRepository = roomRepository;
  }

  async execute(data) {

    const room = new Room(data);

    return await this.roomRepository.save(room);
  }

}