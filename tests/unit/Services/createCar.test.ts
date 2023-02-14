import { Model } from 'mongoose';
import { expect } from 'chai';
import Sinon from 'sinon';
import car from '../../mocks/car';
import CarService from '../../../src/Services/CarService';

describe('Deveria criar um carro', function () {
  afterEach(Sinon.restore);
  it('Criando um carro com SUCESSO', async function () { 
    Sinon.stub(Model, 'create').resolves(car.createCar);

    const service = new CarService();
    const result = await service.create(car.createCar);

    expect(result).to.be.deep.equal(car.createCarRes);
  });
});