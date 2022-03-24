import express from 'express';

import companiesRoutes from './companies.routes';
import vehicleRoutes from './vehicle.routes';

const routes = (app, route) => {
  route.use(express.json());

  companiesRoutes(route);
  vehicleRoutes(route);
};

export default routes;
