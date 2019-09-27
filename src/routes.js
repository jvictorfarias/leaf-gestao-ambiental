import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

// Middlewares
import accessLog from './app/middlewares/accessLog';
import authMiddleware from './app/middlewares/auth';
import adminMiddleware from './app/middlewares/admin';

// Controllers
import TechnicianController from './app/controllers/TechnicianController';
import DepartmentController from './app/controllers/DepartmentController';
import InstitutionController from './app/controllers/InstitutionController';
import EnvironmentController from './app/controllers/EnvironmentController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

const routes = new Router();
const upload = multer(multerConfig);

// Global Middlewares
routes.use(accessLog);

// Stakeholder

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

// File Handle
routes.post(
  '/files',
  upload.single('file'),
  authMiddleware,
  FileController.store
);
export default routes;
