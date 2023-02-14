import {
  Model,
  models,
  Schema,
  model,
  isValidObjectId,
  UpdateQuery,
} from 'mongoose';
import HttpException from '../middlewares/helpers/HttpException';
  
abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;
  
  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }
  
  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findAll(): Promise<T[]> {
    return this.model.find();
  }

  private validateMongoId(id: string): void {
    if (!isValidObjectId(id)) throw new HttpException(422, 'Invalid mongo id');
  }

  public async findById(id: string): Promise<T | null> { 
    this.validateMongoId(id);
    const car = this.model.findById(id);
    return car; 
  }
  
  public async update(id: string, obj: Partial<T>): Promise<T | null> {
    this.validateMongoId(id);
  
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }

  public async remove(id: string): Promise<T | null> {
    this.validateMongoId(id);
    return this.model.findByIdAndDelete({ _id: id });
  }
}
  
export default AbstractODM;
