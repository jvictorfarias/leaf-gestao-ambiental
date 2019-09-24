import { Router } from 'express';
import accessLog from './app/middlewares/accessLog';
import authMiddleware from './app/middlewares/auth';

import TechnicianController from './app/controllers/TechnicianController';
import DepartmentController from './app/controllers/DepartmentController';
import InstitutionController from './app/controllers/InstitutionController';
import EnvironmentController from './app/controllers/EnvironmentController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

const routes = new Router();

// Global Middlewares
routes.use(accessLog);

// Technicians
routes.post('/technicians', TechnicianController.store);
routes.put('/technicians', authMiddleware, TechnicianController.update);
// Sessions
routes.post('/technicians/sessions', SessionController.store);

// Entities
// Institutions
routes.post('/institutions', authMiddleware, InstitutionController.store);
// Departments
routes.post('/departments', authMiddleware, DepartmentController.store);
// Environments
routes.post('/environments', authMiddleware, EnvironmentController.store);

// File Handle
routes.post('/files', authMiddleware, FileController.store);
export default routes;
