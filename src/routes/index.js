import express from 'express';

import companiesRoutes from './companies.routes';
import vehicleRoutes from './vehicle.routes';

const routes = (app, route) => {
  route.use(express.json());
  app.use('/companies', route);

  companiesRoutes(route);
  vehicleRoutes(route);
};

export default routes;
