import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import HttpException from '../middlewares/helpers/HttpException';
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
  public async findById(id: string) {
    const car = await this.carODM.findById(id);
    if (!car) throw new HttpException(404, 'Car not found');
    return new Car(car);
  }
}