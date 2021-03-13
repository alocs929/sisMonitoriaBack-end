import 'reflect-metadata';
import express from 'express';

import routes from './routes';
import './database';

const app = express();
app.use(express.json());
app.use(routes);
app.get('/', (request, response) => response.json({ message: 'Hellow!' }));

app.listen(3333, () => {
  console.log('Servidor no ar! Port:3333');
});
