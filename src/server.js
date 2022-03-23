import dotenv from 'dotenv';

import app from './app';

dotenv.config();

const port = process.env.RUN_PORT ? process.env.RUN_PORT : 3000;

app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}`);
});
