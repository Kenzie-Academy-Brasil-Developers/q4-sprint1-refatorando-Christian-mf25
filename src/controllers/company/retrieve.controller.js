import companies from '../../config/database';

const retrieveCompanies = (req, res) => {
  res.status(200).json(companies);
};

export default retrieveCompanies;
