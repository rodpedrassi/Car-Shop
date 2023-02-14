import IMotorcycle from '../Interfaces/IMotorcycle';
// import CategoryType from './types/MotorcycleTypes';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    const { id, model, year, color, status, buyValue, category, engineCapacity } = motorcycle;
    super({ id, model, year, color, status, buyValue });
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    if (status) this.status = status;
    this.buyValue = buyValue;
    this.category = category;
    this.engineCapacity = engineCapacity;
  }

  getCategory() { return this.category; }
  setCategory(category: string) { this.category = category; }

  getEngineCapacity() { return this.engineCapacity; }
  setEngineCapacity(engineCapacity: number) { this.engineCapacity = engineCapacity; }
}