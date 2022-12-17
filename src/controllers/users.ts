import { RequestHandler } from 'express';

import UsersDB from '../data-access/users';
import {
    IUserCreationAttributes,
    IUserModel,
    IUsersSearchQuery,
    UpdateUserResponse,
} from '../types';

type GetUserHandler = RequestHandler<{ userId: string }, IUserModel>;
const getUser: GetUserHandler = async (req, res) => {
    const user = await UsersDB.get(req.params.userId);
    if (!user) res.sendStatus(404);
    res.json(user);
};

type GetUsersHandler = RequestHandler<
    {},
    UpdateUserResponse,
    null,
    IUsersSearchQuery
>;
const getUsers: GetUsersHandler = async (req, res) => {
    const params = req.query;
    const users = await UsersDB.getAll(params);
    res.json(users);
};

type CreateUserHandler = RequestHandler<
    {},
    IUserModel, //IUserAttributes,
    IUserCreationAttributes
>;
const createUser: CreateUserHandler = async (req, res) => {
    const userData = req.body;
    const createdUser = await UsersDB.create(userData);
    res.json(createdUser);
};

type UpdatedUserHandler = RequestHandler<
    { userId: string },
    string,
    IUserCreationAttributes
>;
const updateUser: UpdatedUserHandler = async (req, res) => {
    const userData = req.body;
    const updatedRows = await UsersDB.update(req.params.userId, userData);
    if (!updatedRows) res.sendStatus(404);
    res.status(200).send(`Changed ${updatedRows} row(s).`);
};

type DeleteUserHandler = RequestHandler<
    { userId: string },
    string,
    IUserCreationAttributes
>;
const deleteUser: DeleteUserHandler = async (req, res) => {
    const deletedRows = await UsersDB.delete(req.params.userId);
    if (!deletedRows) res.sendStatus(404);
    res.status(200).send(`Deleted ${deletedRows} row(s).`);
};

const usersControllers = {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};
export default usersControllers;
