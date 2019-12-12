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
import ReviewController from './app/controllers/ReviewController';

const routes = new Router();
const upload = multer(multerConfig);

// Sessions
routes.post('/session', SessionController.store);

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

// Variables Routes

// Aspects
routes.get('/aspects', AspectController.index);
routes.post(
  '/aspects',
  authMiddleware,
  adminMiddleware,
  AspectController.store
);

// Impacts
routes.get('/impacts', ImpactController.index);
routes.post(
  '/impacts',
  authMiddleware,
  adminMiddleware,
  ImpactController.store
);

// Causes
routes.get('/causes', authMiddleware, CauseController.index);
routes.post('/causes', authMiddleware, adminMiddleware, CauseController.store);

// Controls
routes.get('/controls', authMiddleware, ControlController.index);
routes.post(
  '/controls',
  authMiddleware,
  adminMiddleware,
  ControlController.store
);

// Actions
routes.get('/actions', authMiddleware, ActionController.index);
routes.post(
  '/actions',
  authMiddleware,
  adminMiddleware,
  ActionController.store
);

// Aspects && Environments join table
routes.post(
  '/environments/variables',
  authMiddleware,
  adminMiddleware,
  AspectEnvsController.store
);
routes.get(
  '/environments/variables',
  authMiddleware,
  AspectEnvsController.index
);

// Reviews
routes.post('/reviews', authMiddleware, ReviewController.store);

// File Handle
routes.post(
  '/files',
  upload.single('file'),
  authMiddleware,
  FileController.store
);
export default routes;
