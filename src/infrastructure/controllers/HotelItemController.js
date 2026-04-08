export default class HotelItemController {
  constructor({ createHotelItem, getAllHotelItems, getHotelItemBySku, deleteHotelItem }) {
    this.createHotelItem   = createHotelItem;
    this.getAllHotelItems   = getAllHotelItems;
    this.getHotelItemBySku = getHotelItemBySku;
    this.deleteHotelItem   = deleteHotelItem;
  }

  async create(req, res) {
    try {
      const item = await this.createHotelItem.execute(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const items = await this.getAllHotelItems.execute();
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getBySku(req, res) {
    try {
      const item = await this.getHotelItemBySku.execute(req.params.sku);
      res.status(200).json(item);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      await this.deleteHotelItem.execute(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
}