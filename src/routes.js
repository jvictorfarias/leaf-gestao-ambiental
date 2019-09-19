import { Router } from 'express';
import AccessLog from './app/middlewares/AccessLog';
import TechnicianController from './app/controllers/TechnicianController';
import DepartmentController from './app/controllers/DepartmentController';
import InstitutionController from './app/controllers/InstitutionController';
import EnvironmentController from './app/controllers/EnvironmentController';

const routes = new Router();

// Middlewares
routes.use(AccessLog);

routes.post('/technicians', TechnicianController);
routes.post('/departments', DepartmentController);
routes.post('/institutions', InstitutionController);
routes.post('/environments', EnvironmentController);

export default routes;
