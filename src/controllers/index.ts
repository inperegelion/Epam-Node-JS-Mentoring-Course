import { RequestHandler } from 'express';

import db from '../db/users';
import { User, UserCore } from '../interfaces';

const getUser: RequestHandler<{ userId: string }, User> = async (req, res) => {
    console.log(`🧔 getting user with id: '${req.params.userId}'`);
    const user = await db.getUser(req.params.userId);
    res.json(user);
};

const getUsers: RequestHandler<null, User[]> = async (_, res) => {
    console.log(`👨‍👩‍👧‍👦 getting all users`);
    const users = await db.getUsers();
    res.json(users);
};

const createUser: RequestHandler<null, User, UserCore> = async (req, res) => {
    console.log(`👶 creating a new user`);
    const userData = req.body;
    try {
        const createdUser = await db.createUser(userData);
        res.json(createdUser);
    } catch (error) {
        // @ts-ignore
        res.status(400).json({ message: error.message });
    }
};

const updateUser: RequestHandler<{ userId: string }, User, UserCore> = async (
    req,
    res
) => {
    console.log(`🪒 updating a user with id: '${req.params.userId}'`);
    const userData = req.body;
    const updatedUser = await db.updateUser(req.params.userId, userData);
    res.json(updatedUser);
};

const deleteUser: RequestHandler<{ userId: string }, User, UserCore> = async (
    req,
    res
) => {
    console.log(`🗿 deleting a user with id: '${req.params.userId}'`);
    const deletedUser = await db.deleteUser(req.params.userId);
    res.json(deletedUser);
};

const controllers = { getUser, getUsers, createUser, updateUser, deleteUser };
export default controllers;
