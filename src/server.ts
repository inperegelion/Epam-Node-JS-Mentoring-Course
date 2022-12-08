import express from 'express';

import controllers from './controllers';
import middlewares from './middlewares';

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(middlewares.log);
app.use(express.json());

app.get('/users/:userId', controllers.getUser);
app.get('/users', controllers.getUsers);
app.post('/users', controllers.createUser);
app.put('/users/:userId', controllers.updateUser);
app.delete('/users/:userId', controllers.deleteUser);

app.listen(PORT);
