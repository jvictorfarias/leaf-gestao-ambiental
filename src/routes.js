import { Router } from 'express';
import AccessLog from './app/middlewares/AccessLog';
import TechnicianController from './app/controllers/TechnicianController';
import DepartmentController from './app/controllers/DepartmentController';
import InstitutionController from './app/controllers/InstitutionController';
import EnvironmentController from './app/controllers/EnvironmentController';

const routes = new Router();

// Middlewares
routes.use(AccessLog);

// Technicians
routes.post('/technicians/create', TechnicianController.store);
// routes.put('/technicians/update', TechnicianController.update);
// Institutions
routes.post('/institutions/create', InstitutionController.store);
// Departments
// routes.post('/departments', DepartmentController);
// Environments
// routes.post('/environments', EnvironmentController);

export default routes;
