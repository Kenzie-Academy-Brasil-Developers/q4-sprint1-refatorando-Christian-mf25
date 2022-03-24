import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import companies from '../../config/database';
import config from '../../config';

const login = async (req, res) => {
  const { cnpj, password } = req.body;
  const key = Object.keys(req.body);

  if (!key.includes('cnpj' && 'password')) {
    return res.status(400).json({ message: 'wrong keys' });
  }

  const company = companies.find((item) => item.cnpj === cnpj);

  const match = await bcrypt.compare(password, company.password);

  if (!company) {
    return res.status(401).json({ message: 'Company not found' });
  }
  if (!match) {
    return res.status(401).json({ message: 'User and password missmatch.' });
  }

  const token = jwt.sign({ cnpj: cnpj }, config.secret, {
    expiresIn: config.expiresIn,
  });

  return res.status(200).json({ token, company });
};

export default login;
