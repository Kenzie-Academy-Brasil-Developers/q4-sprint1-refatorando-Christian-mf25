import companies from '../../config/database';

const deleteCompany = (req, res) => {
  const { cnpj } = req.params;

  const companyDeleted = companies.filter((company) => company.cnpj !== cnpj);

  res.status(200).json({ messagem: 'Company deleted', companyDeleted });
};

export default deleteCompany;
