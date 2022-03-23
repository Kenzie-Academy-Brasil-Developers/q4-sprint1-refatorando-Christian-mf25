import dotenv from 'dotenv';

dotenv.config();

const config = {
  secret: process.env.SECRET_KEY,
  expiresIn: process.env.EXPIRES_IN,
};

export default config;
