import { Model } from 'mongoose';
import { expect } from 'chai';
import Sinon from 'sinon';
import moto from '../../mocks/moto';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Deveria atualizar as informações da moto', function () {
  afterEach(Sinon.restore);
  it('Atualizando uma moto com SUCESSO', async function () { 
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(moto.motoReqUpdated);
  
    const service = new MotorcycleService();
    const result = await service.update(moto.validId, moto.motoReq);
  
    expect(result).to.be.deep.equal(moto.motoReqUpdated);
  });
});