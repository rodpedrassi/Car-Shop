import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

const PATH_ID = '/motorcycles/:id';

routes.post( 
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

routes.get( 
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).findAll(),
);

routes.get( 
  PATH_ID,
  (req, res, next) => new MotorcycleController(req, res, next).findById(),
);

routes.put( 
  PATH_ID,
  (req, res, next) => new MotorcycleController(req, res, next).update(),
);

routes.delete( 
  PATH_ID,
  (req, res, next) => new MotorcycleController(req, res, next).remove(),
);

export default routes;
