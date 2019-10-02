import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

// Rule Middlewares
import authMiddleware from './app/middlewares/auth';
import adminMiddleware from './app/middlewares/admin';

// Controllers
import TechnicianController from './app/controllers/TechnicianController';
import DepartmentController from './app/controllers/DepartmentController';
import InstitutionController from './app/controllers/InstitutionController';
import EnvironmentController from './app/controllers/EnvironmentController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

// Variables Controllers
import AspectController from './app/controllers/AspectController';
import ImpactController from './app/controllers/ImpactController';
import CauseController from './app/controllers/CauseController';
import ControlController from './app/controllers/ControlController';
import ActionController from './app/controllers/ActionController';
import AspectEnvsController from './app/controllers/AspectEnvsController';

const routes = new Router();
const upload = multer(multerConfig);

// Sessions
routes.post('/technicians/sessions', SessionController.store);

// Entities

// Technicians
routes.post('/technicians', TechnicianController.store);
routes.put('/technicians', authMiddleware, TechnicianController.update);
routes.get(
  '/technicians',
  authMiddleware,
  adminMiddleware,
  TechnicianController.index
);

// Institutions
routes.post(
  '/institutions',
  authMiddleware,
  adminMiddleware,
  InstitutionController.store
);
routes.put(
  '/institutions',
  authMiddleware,
  adminMiddleware,
  InstitutionController.update
);
routes.get('/institutions', authMiddleware, InstitutionController.index);

// Departments
routes.post(
  '/departments',
  authMiddleware,
  adminMiddleware,
  DepartmentController.store
);
routes.put(
  '/departments',
  authMiddleware,
  adminMiddleware,
  DepartmentController.update
);
routes.get('/departments', authMiddleware, DepartmentController.index);

// Environments
routes.post(
  '/environments',
  authMiddleware,
  adminMiddleware,
  EnvironmentController.store
);
routes.put(
  '/environments',
  authMiddleware,
  adminMiddleware,
  EnvironmentController.update
);
routes.get('/environments', authMiddleware, EnvironmentController.index);

// Aspects
routes.get('/aspects', AspectController.index);
routes.post('/aspects', AspectController.store);

// Impacts
routes.get('/impacts', ImpactController.index);
routes.post('/impacts', ImpactController.store);

// Causes
routes.get('/causes', CauseController.index);
routes.post('/causes', CauseController.store);

// Controls
routes.get('/controls', ControlController.index);
routes.post('/controls', ControlController.store);

// Actions
routes.get('/actions', ActionController.index);
routes.post('/actions', ActionController.store);

// Aspects && Environments join table
routes.post('/environments/variables', AspectEnvsController.store);
// File Handle
routes.post(
  '/files',
  upload.single('file'),
  authMiddleware,
  FileController.store
);
export default routes;
