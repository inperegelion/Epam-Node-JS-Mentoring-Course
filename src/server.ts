import express from 'express';

import controllers from './controllers';
import middlewares from './middlewares';
import validator from './middlewares/validation';

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(middlewares.log);
app.use(express.json());

app.get('/users/:userId', controllers.getUser);
app.get('/users', controllers.getUsers);
app.post('/users', validator.createUser, controllers.createUser);
app.put('/users/:userId', validator.updateUser, controllers.updateUser);
app.delete('/users/:userId', controllers.deleteUser);

app.listen(PORT);
console.log(`Listening on a port: ${PORT}`);
