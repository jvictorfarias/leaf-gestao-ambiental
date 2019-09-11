import { Router } from 'express';

// Middlewares

const routes = new Router();

routes.post('/users', (req, res) => res.status(200).json({ ok: 'ok' }));

routes.post('/rooms', (req, res) => res.status(200).json({ ok: 'ok' }));

routes.put('/users', (req, res) => res.status(200).json({ ok: 'ok' }));
routes.post('/');
routes.get('/users');
routes.get('/rooms');
