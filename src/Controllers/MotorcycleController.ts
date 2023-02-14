import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController { // KKKKKKKKKKKKKKKK
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() { 
    const motor = this.req.body;
    const newMotor = await this.service.create(motor);
    return this.res.status(201).json(newMotor);
  }

  public async findAll() {
    const motors = await this.service.findAll();
    return this.res.status(200).json(motors);
  }

  public async findById() {
    try {
      const { id } = this.req.params;
      const motor = await this.service.findById(id);
      return this.res.status(200).json(motor);
    } catch (error) {
      this.next(error);
    }
  }
  public async update() {
    try {
      const { id } = this.req.params;
      const motor = this.req.body;
      const updated = await this.service.update(id, motor);
      return this.res.status(200).json(updated);
    } catch (error) {
      this.next(error);
    }
  }
}