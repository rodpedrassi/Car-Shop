import { Model } from 'mongoose';
import { expect } from 'chai';
import Sinon from 'sinon';
import car from '../../mocks/car';
import CarService from '../../../src/Services/CarService';

describe('Deveria retornar todos os carros cadastrados', function () {
  afterEach(Sinon.restore);
  it('Retorna todos os carros', async function () { 
    Sinon.stub(Model, 'find').resolves(car.allCars);

    const service = new CarService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(car.allCars);
  });
  describe('Deveria retornar um carro por ID', function () {
    const { createCarRes } = car;
    const { id } = createCarRes;
    it('Retorna um carro com SUCESSO', async function () { 
      Sinon.stub(Model, 'findById').resolves(car.createCarRes);
  
      const service = new CarService();
      const result = await service.findById(id);
  
      expect(result).to.be.deep.equal(car.createCarRes);
    });
    it('Retorna um erro caso o id seja invalido', async function () { 
      const invalidId = '123abc';
      const RESULT_ERROR = 'Invalid mongo id';

      Sinon.stub(Model, 'findById').resolves(invalidId);
      
      try {
        const service = new CarService();
        await service.findById(invalidId);
      } catch (error) {
        expect((error as Error).message).to.be.equal(RESULT_ERROR);
      }
    });
    it('Retorna um erro caso o id não seja encontrado', async function () { 
      const RESULT_ERROR = 'Car not found';

      Sinon.stub(Model, 'findById').resolves(id);

      try {
        const service = new CarService();
        await service.findById(id);
      } catch (error) {
        expect((error as Error).message).to.be.equal(RESULT_ERROR);
      }
    });
  });
});