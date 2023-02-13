import ICar from '../Interfaces/ICar';

export default class Car {
  protected id?: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status = false ;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    const { id, model, year, color, status, buyValue, doorsQty, seatsQty } = car;
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    if (status) this.status = status;
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }
  getId() { return this.id; }
  setId(id: string) { this.id = id; }

  getModel() { return this.model; }
  setModel(model: string) { this.model = model; }

  getYear() { return this.year; }
  setYear(year: number) { this.year = year; }

  getColor() { return this.color; }
  setColor(color: string) { this.color = color; }

  getStatus() { return this.status; }
  setStatus(status: boolean) { this.status = status; }

  getBuyValue() { return this.buyValue; }
  setBuyValue(buyValue: number) { this.buyValue = buyValue; }

  getDoorsQty() { return this.doorsQty; }
  setDoorsQty(doorsQty: number) { this.doorsQty = doorsQty; }

  getSeatsQty() { return this.seatsQty; }
  setSeatsQty(seatsQty: number) { this.seatsQty = seatsQty; }
}