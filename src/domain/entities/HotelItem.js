export default class HotelItem {
  constructor({ id, name, sku, category, quantity, unitPrice, location }) {
    if (!name)     throw new Error("Name is required");
    if (!sku)      throw new Error("SKU is required");
    if (!category) throw new Error("Category is required");
    if (quantity == null || !Number.isInteger(Number(quantity)) || Number(quantity) < 0)
      throw new Error("Quantity must be an integer >= 0");
    if (unitPrice == null || Number(unitPrice) < 0)
      throw new Error("Unit price must be >= 0");

    this.id        = id;
    this.name      = name;
    this.sku       = sku;
    this.category  = category;
    this.quantity  = Number(quantity);
    this.unitPrice = Number(unitPrice);
    this.location  = location || "";
  }
}