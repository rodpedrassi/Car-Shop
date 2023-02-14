import { Model } from 'mongoose';
import { expect } from 'chai';
import Sinon from 'sinon';
import moto from '../../mocks/moto';
import MotoService from '../../../src/Services/MotorcycleService';

describe('Deveria deletar uma moto', function () {
  afterEach(Sinon.restore);
  it('Removendo uma moto com SUCESSO', async function () {
    Sinon.stub(Model, 'findByIdAndDelete').resolves(moto.motoRes);
  
    const service = new MotoService();
    const result = await service.remove(moto.validId);
  
    expect(result).to.deep.equal(moto.motoRes);
  });
});