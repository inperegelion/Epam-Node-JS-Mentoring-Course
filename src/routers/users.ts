import express from 'express';
import usersControllers from '../controllers/users';
import validator from '../middlewares/validation';
let usersRouter = express.Router();

usersRouter.get('/:userId', usersControllers.getUser);
usersRouter.get('/', usersControllers.getUsers);
usersRouter.post('/', validator.createUser, usersControllers.createUser);
usersRouter.put('/:userId', validator.updateUser, usersControllers.updateUser);
usersRouter.delete('/:userId', usersControllers.deleteUser);

export default usersRouter;
