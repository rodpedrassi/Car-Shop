import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import HttpException from '../middlewares/helpers/HttpException';
import CarODM from '../Models/CarODM';

const CAR_NOT_FOUND = 'Car not found';

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
    if (!car) throw new HttpException(404, CAR_NOT_FOUND);
    return new Car(car);
  }
  public async update(id: string, car: ICar) {
    const updated = await this.carODM.update(id, car);
    if (!updated) throw new HttpException(404, CAR_NOT_FOUND);
    return new Car(updated);
  }

  public async remove(id: string) {
    const removed = await this.carODM.remove(id);
    if (!removed) throw new HttpException(404, CAR_NOT_FOUND);
    return new Car(removed);
  }
}