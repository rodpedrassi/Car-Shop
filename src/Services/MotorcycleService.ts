import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import HttpException from '../middlewares/helpers/HttpException';
import MotorcycleODM from '../Models/MotorcycleODM';

const MOTOR_NOT_FOUND = 'Motorcycle not found';

export default class MotorcycleService {
  motorcycleODM: MotorcycleODM;
  constructor() {
    this.motorcycleODM = new MotorcycleODM();
  }
  public async create(motorcycle: IMotorcycle) {
    const newMotor = await this.motorcycleODM.create(motorcycle);
    return new Motorcycle(newMotor);
  }

  public async findAll() {
    const motorcycleODM = await this.motorcycleODM.findAll();
    const cars = motorcycleODM.map((motor) => new Motorcycle(motor));
    return cars;
  }
  public async findById(id: string) {
    const motor = await this.motorcycleODM.findById(id);
    if (!motor) throw new HttpException(404, MOTOR_NOT_FOUND);
    return new Motorcycle(motor);
  }
  public async update(id: string, motor: IMotorcycle) {
    const updated = await this.motorcycleODM.update(id, motor);
    if (!updated) throw new HttpException(404, MOTOR_NOT_FOUND);
    return new Motorcycle(updated);
  }

  public async remove(id: string) {
    const removed = await this.motorcycleODM.remove(id);
    if (!removed) throw new HttpException(404, MOTOR_NOT_FOUND);
    return new Motorcycle(removed);
  }
}