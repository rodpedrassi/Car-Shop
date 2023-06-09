import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';

export default class CarController {
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

  public async findById() {
    try {
      const { id } = this.req.params;
      const car = await this.service.findById(id);
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }
  public async update() {
    try {
      const { id } = this.req.params;
      const car = this.req.body;
      const updated = await this.service.update(id, car);
      return this.res.status(200).json(updated);
    } catch (error) {
      this.next(error);
    }
  }

  public async remove() {
    const { id } = this.req.params;
    try {
      await this.service.remove(id);
      return this.res.status(204).json();
    } catch (error) {
      this.next(error);
    }
  }
}