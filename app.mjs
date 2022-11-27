import express from 'express';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import errorController from './controllers/errorController.mjs';

import linkRoute from './routes/linkRoute.mjs';

const app = express();
app.use(express.json());

app.use(mongoSanitize());
app.use(xss());

app.use('/link', linkRoute);
app.get('/:link', linkRoute);

app.use(errorController);

export default app;
