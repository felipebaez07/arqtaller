// src/infrastructure/config/container.js

// ¡Aquí es donde te falta el import!
import CreateRoom from "../../application/usecases/CreateRoom.js"; 
import GetAllRooms from "../../application/usecases/GetAllRooms.js";
import MongoRoomRepository from "../repositories/MongoRoomRepository.js";
import RoomController from "../controllers/RoomController.js";

const roomRepository = new MongoRoomRepository();

const createRoom = new CreateRoom(roomRepository);
const getAllRooms = new GetAllRooms(roomRepository);

const roomController = new RoomController(createRoom, getAllRooms);

export { roomController };