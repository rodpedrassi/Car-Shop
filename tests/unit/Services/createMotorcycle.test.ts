import { Model } from 'mongoose';
import { expect } from 'chai';
import Sinon from 'sinon';
import moto from '../../mocks/moto';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Deveria criar uma moto', function () {
  afterEach(Sinon.restore);
  it('Criando uma moto com SUCESSO', async function () { 
    Sinon.stub(Model, 'create').resolves(moto.motoRes);

    const service = new MotorcycleService();
    const result = await service.create(moto.motoReq);

    expect(result).to.be.deep.equal(moto.motoRes);
  });
});