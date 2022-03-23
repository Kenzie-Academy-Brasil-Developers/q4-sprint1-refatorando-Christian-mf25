import companies from '../../config/database';

const verifyDuplicateCnpj = (req, res, next) => {
  const { cnpj } = req.body;

  const company = companies.find((item) => item.cnpj === cnpj);

  if (company) {
    return res.status(400).json({ message: 'CNPJ already registered' });
  }

  return next();
};

export default verifyDuplicateCnpj;
