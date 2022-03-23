import companies from '../../config/database';

const verifyVehicleExistence = (req, res, next) => {
  const { plate } = req.params;

  const vehicle = companies.some((item) => item.vehicles.some((car) => car.plate === plate));

  if (!vehicle) {
    return res.status(400).json({ message: 'Vehicle not registered' });
  }

  req.vehicle = vehicle;

  return next();
};

export default verifyVehicleExistence;
