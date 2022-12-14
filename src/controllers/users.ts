import { RequestHandler } from 'express';

import UsersDB from '../data-access/users';
import { User, UserCore, UsersSearchQuery } from '../types';

type GetUserHandler = RequestHandler<{ userId: string }, User>;
const getUser: GetUserHandler = async (req, res) => {
    const user = await UsersDB.get(req.params.userId);
    if (!user) res.sendStatus(404);
    res.json(user);
};

type GetUsersHandler = RequestHandler<{}, User[], null, UsersSearchQuery>;
const getUsers: GetUsersHandler = async (req, res) => {
    const params = req.query;
    const users = await UsersDB.getAll(params);
    res.json(users);
};

type CreateUserHandler = RequestHandler<{}, User, UserCore>;
const createUser: CreateUserHandler = async (req, res) => {
    const userData = req.body;
    const createdUser = await UsersDB.create(userData);
    res.json(createdUser);
};

type UpdatedUserHandler = RequestHandler<{ userId: string }, User, UserCore>;
const updateUser: UpdatedUserHandler = async (req, res) => {
    const userData = req.body;
    const updatedUser = await UsersDB.update(req.params.userId, userData);
    if (!updatedUser) res.sendStatus(404);
    res.json(updatedUser);
};

type DeleteUserHandler = RequestHandler<{ userId: string }, User, UserCore>;
const deleteUser: DeleteUserHandler = async (req, res) => {
    const deletedUser = await UsersDB.delete(req.params.userId);
    if (!deletedUser) res.sendStatus(404);
    res.json(deletedUser);
};

const usersControllers = {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};
export default usersControllers;
