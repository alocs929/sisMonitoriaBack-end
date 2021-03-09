import express from 'express';

import routes from './routes';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hellow!' }));

app.listen(3333, () => {
  console.log('Servidor no ar! Port:3333');
});
