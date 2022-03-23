import {
  registerVehicle,
  retrieveVehicle,
  updateVehicle,
  deleteVehicle,
} from '../controllers';
import {
  authenticateCompany,
  verifyCompanyExistence,
  verifyDuplicateVehiclePlate,
  validate,
  verifyVehicleExistence,
} from '../middlewares';
import vehicleSchema from '../shapes';

const vehicleRoutes = (route) => {
  route.post(
    '/:cnpj/vehicles',
    authenticateCompany,
    verifyCompanyExistence,
    verifyDuplicateVehiclePlate,
    validate(vehicleSchema),
    registerVehicle,
  );

  route.get(
    '/:cnpj/vehicles',
    authenticateCompany,
    verifyCompanyExistence,
    retrieveVehicle,
  );

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
