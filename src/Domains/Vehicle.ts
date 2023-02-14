import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id?: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;

  constructor(vehicle: IVehicle) {
    const { id, model, year, color, status = false, buyValue } = vehicle;
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status;
    this.buyValue = buyValue;
  }

  // getId() { return this.id; }
  // setId(id: string) { this.id = id; }

  // getModel() { return this.model; }
  // setModel(model: string) { this.model = model; }

  // getYear() { return this.year; }
  // setYear(year: number) { this.year = year; }

  // getColor() { return this.color; }
  // setColor(color: string) { this.color = color; }

  // getStatus() { return this.status; }
  // setStatus(status: boolean) { this.status = status; }

  // getBuyValue() { return this.buyValue; }
  // setBuyValue(buyValue: number) { this.buyValue = buyValue; }
}