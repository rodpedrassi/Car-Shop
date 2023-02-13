import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';

export default class TransferController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car = this.req.body;
    const newCar = await this.service.create(car);
    return this.res.status(201).json(newCar);
  }

  public async findAll() {
    const cars = await this.service.findAll();
    return this.res.status(200).json(cars);
  }
}