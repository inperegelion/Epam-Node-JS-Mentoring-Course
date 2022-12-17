import express from 'express';

import middlewares from './middlewares';
import usersRouter from './routers/users';

const PORT = process.env.PORT ?? 3000;
const app = express();

// middlewares
app.use(middlewares.log);
app.use(express.json());

// routers
app.use('/users', usersRouter);

app.listen(PORT);
console.log(`👂 Listening on a port: ${PORT}`);
