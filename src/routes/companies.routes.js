import {
  registerCompany,
  login,
  retrieveCompanies,
  updateCompany,
  deleteCompany,
} from '../controllers/company';

import {
  verifyCompanyExistence,
  verifyDuplicateCnpj,
  validateSchema,
  authenticateCompany,
} from '../middlewares/company';
import companySchema from '../shapes/companySchema.shape';

const companiesRoutes = (route) => {
  route.post('/register', validateSchema(companySchema), verifyDuplicateCnpj, registerCompany);

  route.post('/login', login);

  route.get('', retrieveCompanies);

  route.put('/:cnpj', authenticateCompany, verifyCompanyExistence, updateCompany);

  route.delete('/:cnpj', authenticateCompany, verifyCompanyExistence, deleteCompany);

  route.get('/teste', (req, res) => {
    const teste = 'teste';
    return res.json({message: teste});
  });
};

export default companiesRoutes;
