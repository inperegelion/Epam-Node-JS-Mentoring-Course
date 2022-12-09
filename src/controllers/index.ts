import { RequestHandler } from 'express';

import db from '../data-access/users';
import { User, UserCore, UsersSearchQuery } from '../types';

type GetUserHandler = RequestHandler<{ userId: string }, User>;
const getUser: GetUserHandler = async (req, res) => {
    const user = await db.getUser(req.params.userId);
    res.json(user);
};

type GetUsersHandler = RequestHandler<null, User[], null, UsersSearchQuery>;
const getUsers: GetUsersHandler = async (req, res) => {
    const users = await db.getUsers(req.query);
    res.json(users);
};

type CreateUserHandler = RequestHandler<null, User, UserCore>;
const createUser: CreateUserHandler = async (req, res) => {
    const userData = req.body;
    const createdUser = await db.createUser(userData);
    res.json(createdUser);
};

type UpdatedUserHandler = RequestHandler<{ userId: string }, User, UserCore>;
const updateUser: UpdatedUserHandler = async (req, res) => {
    const userData = req.body;
    const updatedUser = await db.updateUser(req.params.userId, userData);
    res.json(updatedUser);
};

type DeleteUserHandler = RequestHandler<{ userId: string }, User, UserCore>;
const deleteUser: DeleteUserHandler = async (req, res) => {
    const deletedUser = await db.deleteUser(req.params.userId);
    res.json(deletedUser);
};

const controllers = { getUser, getUsers, createUser, updateUser, deleteUser };
export default controllers;
