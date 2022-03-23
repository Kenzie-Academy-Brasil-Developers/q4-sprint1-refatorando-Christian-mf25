import verifyDuplicateVehiclePlate from './vehicle/verifyDuplicatePlate.middleware';
import verifyDuplicateCnpj from './company/verifyDuplicateCnpj.middleware';
import verifyVehicleExistence from './vehicle/verifyExistence.middleware';
import verifyCompanyExistence from './company/verifyExistence.middleware';
import authenticateCompany from './company/authenticate.middleware';
import validate from './validateShape/validate.middleware';

export {
  verifyDuplicateVehiclePlate,
  verifyVehicleExistence,
  verifyCompanyExistence,
  verifyDuplicateCnpj,
  authenticateCompany,
  validate,
};
