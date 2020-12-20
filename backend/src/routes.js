import { Router } from 'express';

import PageController from './app/controllers/PageController';
import PostController from './app/controllers/PostController';

const routes = new Router();

routes.get('/pages', PageController.index);
routes.get('/posts', PostController.index);

export default routes;