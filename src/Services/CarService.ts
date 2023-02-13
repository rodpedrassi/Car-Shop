import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  carODM: CarODM;
  constructor() {
    this.carODM = new CarODM();
  }
  public async create(car: ICar) {
    const newCar = await this.carODM.create(car);
    return new Car(newCar);
  }
}