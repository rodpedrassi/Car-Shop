import { Model } from 'mongoose';
import { expect } from 'chai';
import Sinon from 'sinon';
import moto from '../../mocks/moto';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Deveria retornar todas as motos cadastradas', function () {
  afterEach(Sinon.restore);
  it('Retorna todas as motos', async function () { 
    Sinon.stub(Model, 'find').resolves(moto.motosRes);

    const service = new MotorcycleService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(moto.motosRes);
  });
  describe('Deveria retornar uma moto por ID', function () {
    const { motoRes } = moto;
    const { id } = motoRes;
    it('Retorna uma moto com SUCESSO', async function () { 
      Sinon.stub(Model, 'findById').resolves(moto.motoRes);
  
      const service = new MotorcycleService();
      const result = await service.findById(id);
  
      expect(result).to.be.deep.equal(moto.motoRes);
    });
    it('Retorna um erro caso o id seja invalido', async function () { 
      const invalidId = '123abc';
      const RESULT_ERROR = 'Invalid mongo id';

      Sinon.stub(Model, 'findById').resolves(invalidId);
      
      try {
        const service = new MotorcycleService();
        await service.findById(invalidId);
      } catch (error) {
        expect((error as Error).message).to.be.equal(RESULT_ERROR);
      }
    });
    it('Retorna um erro caso o id não seja encontrado', async function () { 
      const RESULT_ERROR = 'Motorcycle not found';

      Sinon.stub(Model, 'findById').resolves(id);

      try {
        const service = new MotorcycleService();
        await service.findById(id);
      } catch (error) {
        expect((error as Error).message).to.be.equal(RESULT_ERROR);
      }
    });
  });
});