import jwt from 'jsonwebtoken';

import config from '../../config';

const authenticateCompany = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Missing authorization' });
  }

  const token = req.headers.authorization.split(' ')[1];

  // eslint-disable-next-line consistent-return
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid Token.' });
    }
  });
  return next();
};

export default authenticateCompany;
