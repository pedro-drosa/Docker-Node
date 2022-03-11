import dotenv from 'dotenv';
import express from 'express';

import Mongo from './database/Mongo.js';
import routes from './routes/index.routes.js';

dotenv.config();

Mongo.connectToDatabase(process.env.DB_URI);

const app = express();

app.use(express.json());
app.use(routes);

export default app;
