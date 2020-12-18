import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

// Rota = Conjunto
// Recurso = Usuário

// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros = 

// GET = Buscar uma informção (Lista, item)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// Query params = http://localhost:3333/users?search=Awlana
// Route params = http://localhost:3333/users/1 (Identificar um recurso)
// Body 

// MVC
// Models
// Views
// Controllers

// index, show, create, update , delete

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;
