// src/infrastructure/config/container.js

// ROOM
import CreateRoom from "../../application/usecases/CreateRoom.js";
import GetAllRooms from "../../application/usecases/GetAllRooms.js";
import MongoRoomRepository from "../repositories/MongoRoomRepository.js";
import RoomController from "../controllers/RoomController.js";

// GUEST
import CreateGuest from "../../application/usecases/CreateGuest.js";
import GetAllGuests from "../../application/usecases/GetAllGuests.js";
import MongoGuestRepository from "../repositories/MongoGuestRepository.js";
import GuestController from "../controllers/GuestController.js";


// ==========================
// ROOM DEPENDENCIES
// ==========================

const roomRepository = new MongoRoomRepository();

const createRoom = new CreateRoom(roomRepository);
const getAllRooms = new GetAllRooms(roomRepository);

const roomController = new RoomController(createRoom, getAllRooms);


// ==========================
// GUEST DEPENDENCIES
// ==========================

const guestRepository = new MongoGuestRepository();

const createGuest = new CreateGuest(guestRepository);
const getAllGuests = new GetAllGuests(guestRepository);

const guestController = new GuestController({
  createGuest,
  getAllGuests
});


// ==========================
// EXPORTS
// ==========================

export { roomController, guestController };