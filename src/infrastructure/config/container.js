import MongoHotelItemRepository from "../repositories/MongoHotelItemRepository.js";
import CreateHotelItem          from "../../application/usecases/CreateHotelItem.js";
import GetAllHotelItems         from "../../application/usecases/GetAllHotelItems.js";
import GetHotelItemBySku        from "../../application/usecases/GetHotelItemBySku.js";
import DeleteHotelItem          from "../../application/usecases/DeleteHotelItem.js";
import HotelItemController      from "../controllers/HotelItemController.js";

// 1. Repositorio
const repository = new MongoHotelItemRepository();

// 2. Use cases
const createHotelItem   = new CreateHotelItem(repository);
const getAllHotelItems   = new GetAllHotelItems(repository);
const getHotelItemBySku = new GetHotelItemBySku(repository);
const deleteHotelItem   = new DeleteHotelItem(repository);

// 3. Controller
const hotelItemController = new HotelItemController({
  createHotelItem,
  getAllHotelItems,
  getHotelItemBySku,
  deleteHotelItem,
});

export { hotelItemController };