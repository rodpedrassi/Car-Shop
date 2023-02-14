import { Model } from 'mongoose';
import { expect } from 'chai';
import Sinon from 'sinon';
import car from '../../mocks/car';
import CarService from '../../../src/Services/CarService';

describe('Deveria atualizar as informações do carro', function () {
  afterEach(Sinon.restore);
  it('Atualizando um carro com SUCESSO', async function () { 
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(car.createCarUpdated);

    const service = new CarService();
    const result = await service.update(car.validId, car.createCar);

    expect(result).to.be.deep.equal(car.createCarUpdated);
  });
});
