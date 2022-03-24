import expressListRoutes from 'express-list-routes';
import express from 'express';

import routes from './routes';

const route = express.Router();
const app = express();

app.use('/companies', route);

routes(app, route);
expressListRoutes(app);

export default app;
