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

  public async findAll() {
    const carsODM = await this.carODM.findAll();
    const cars = carsODM.map((car) => new Car(car));
    return cars;
  }
}