import {
  registerCompany,
  login,
  retrieveCompanies,
  updateCompany,
  deleteCompany,
} from '../controllers';
import {
  validate,
  verifyDuplicateCnpj,
  authenticateCompany,
  verifyCompanyExistence,
} from '../middlewares';
import companySchema from '../shapes';

const companiesRoutes = (route) => {
  route.post('/register', validate(companySchema), verifyDuplicateCnpj, registerCompany);

  route.post('/login', login);

  route.get('', retrieveCompanies);

  route.put('/:cnpj', authenticateCompany, verifyCompanyExistence, updateCompany);

  route.delete('/:cnpj', authenticateCompany, verifyCompanyExistence, deleteCompany);

  route.get('/teste', (req, res) => {
    const teste = 'teste';
    return res.json({ message: teste });
  });
};

export default companiesRoutes;
