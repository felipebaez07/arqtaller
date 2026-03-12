export default class RoomController {
  constructor(createRoomUseCase, getAllRoomsUseCase) {
    // ¡Asegúrate de que estas líneas estén aquí!
    this.createRoomUseCase = createRoomUseCase;
    this.getAllRoomsUseCase = getAllRoomsUseCase;
  }

  async create(req, res) {
    try {
      // Aquí es donde explota porque this.createRoomUseCase es undefined
      const room = await this.createRoomUseCase.execute(req.body);
      res.status(201).json(room);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}