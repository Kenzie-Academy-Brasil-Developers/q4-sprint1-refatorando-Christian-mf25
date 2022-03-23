import companies from '../../config/database';

const verifyCompanyExistence = (req, res, next) => {
  const { cnpj } = req.params;

  const company = companies.find((item) => item.cnpj === cnpj);

  if (!company) {
    return res.status(400).json({ message: 'Company not registered' });
  }

  req.company = company;

  return next();
};

export default verifyCompanyExistence;
