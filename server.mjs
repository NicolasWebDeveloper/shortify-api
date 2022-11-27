import { config } from 'dotenv';
import mongoose from 'mongoose';
import app from './app.mjs';

config({ path: './config.env' });

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log('Database connection established'))
  .catch(err => {
    console.log('Could not connect to the Database');
    console.error(err);
    process.exit(1);
  });

const port = 3000 || process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}`));
