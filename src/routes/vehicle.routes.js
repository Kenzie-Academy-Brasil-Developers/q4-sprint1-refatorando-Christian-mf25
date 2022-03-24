import { verifyDuplicateVehiclePlate, verifyVehicleExistence } from '../middlewares/vehicle';
import {
  authenticateCompany,
  validateSchema,
  verifyCompanyExistence,
} from '../middlewares/company';

import {
  registerVehicle,
  retrieveVehicle,
  updateVehicle,
  deleteVehicle,
} from '../controllers/vehicle';
import vehicleSchema from '../shapes/vehicleSchema.shape';

const vehicleRoutes = (route) => {
  route.post(
    '/:cnpj/vehicles',
    authenticateCompany,
    verifyCompanyExistence,
    verifyDuplicateVehiclePlate,
    validateSchema(vehicleSchema),
    registerVehicle,
  );

  route.get('/:cnpj/vehicles', authenticateCompany, verifyCompanyExistence, retrieveVehicle);

  route.put(
    '/:cnpj/vehicles/:plate',
    authenticateCompany,
    verifyCompanyExistence,
    verifyVehicleExistence,
    updateVehicle,
  );

  route.delete(
    '/:cnpj/vehicles/:plate',
    authenticateCompany,
    verifyCompanyExistence,
    verifyVehicleExistence,
    deleteVehicle,
  );
};

export default vehicleRoutes;
