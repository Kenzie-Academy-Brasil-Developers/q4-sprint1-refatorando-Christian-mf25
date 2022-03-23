import companies from '../../config/database';

const verifyDuplicateVehiclePlate = (req, res, next) => {
  const { plate } = req.body;

  const vehicle = companies.some((item) => item.vehicles.some((car) => car.plate === plate));

  if (vehicle) {
    return res.status(400).json({ message: 'Vehicle already registered' });
  }

  return next();
};

export default verifyDuplicateVehiclePlate;
