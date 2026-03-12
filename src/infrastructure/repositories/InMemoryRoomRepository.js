import RoomRepository from "../../domain/repositories/RoomRepository.js";

export default class InMemoryRoomRepository extends RoomRepository {

  constructor() {
    super();
    this.rooms = [];
  }

  async save(room) {

    const index = this.rooms.findIndex(r => r.id === room.id);

    if (index >= 0) {
      this.rooms[index] = room;
    } else {
      this.rooms.push(room);
    }

    return room;
  }

  async findAll() {
    return this.rooms;
  }

}