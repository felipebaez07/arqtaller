export default class Room {

  constructor({ id, number, type, price, capacity, status }) {
    this.id = id;
    this.number = number;
    this.type = type;
    this.price = Number(price);
    this.capacity = Number(capacity);
    this.status = status;
  }

}