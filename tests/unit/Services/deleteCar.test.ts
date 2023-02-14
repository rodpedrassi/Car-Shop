import { Model } from 'mongoose';
import { expect } from 'chai';
import Sinon from 'sinon';
import car from '../../mocks/car';
import CarService from '../../../src/Services/CarService';

describe('Deveria deletar um carro', function () {
  afterEach(Sinon.restore);
  it('Removendo um carro com SUCESSO', async function () {
    Sinon.stub(Model, 'findByIdAndDelete').resolves(car.createCarRes);
  
    const service = new CarService();
    const result = await service.remove(car.validId);
  
    expect(result).to.deep.equal(car.createCarRes);
  });
});