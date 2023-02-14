import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    const { id, model, year, color, status, buyValue, doorsQty, seatsQty } = car;
    super({ id, model, year, color, status, buyValue });
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    if (status) this.status = status;
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }

  getDoorsQty() { return this.doorsQty; }
  setDoorsQty(doorsQty: number) { this.doorsQty = doorsQty; }

  getSeatsQty() { return this.seatsQty; }
  setSeatsQty(seatsQty: number) { this.seatsQty = seatsQty; }
}