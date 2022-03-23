import companies from '../../config/database';

const updateCompany = (req, res) => {
  const { company } = req;
  const updatedCompany = { ...company, ...req.body };

  const index = companies.indexOf(company);

  companies[index] = updatedCompany;

  res.status(200).json({ messagem: 'Company updated', companies });
};

export default updateCompany;
