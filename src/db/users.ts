import { randomUUID } from 'crypto';
import { isValidNewUser } from '../helpers/isValidNewUser';
import { User, UserCore } from '../interfaces';
import { findInstance } from '../utils/findInstance';
import { mockedUsers } from './mocks';

const users = mockedUsers;

export function getUser(userId: User['id']): User {
    return users.find((user) => user.id === userId && !user.isDeleted);
}

export function getUsers(): User[] {
    return users.filter((user) => !user.isDeleted);
}

export function createUser(data: UserCore): User {
    if (isValidNewUser(data)) {
        const newUser = {
            ...data,
            id: randomUUID(),
            isDeleted: false,
        };
        users.push(newUser);
        return newUser;
    }
    throw new Error('♿ New User is Invalid!');
}

export function updateUser(
    userId: User['id'], //
    data: Partial<UserCore> | UserCore
): User {
    const [userIndex, user] = findInstance<User, string>(users, 'id', userId);
    const updatedUser = { ...user, ...data };
    users[userIndex] = updatedUser;
    return updatedUser;
}

export function deleteUser(userId: User['id']): User {
    const [userIndex, user] = findInstance<User, string>(users, 'id', userId);
    const deletedUser: User = { ...user, isDeleted: true };
    users[userIndex] = deletedUser;
    return deletedUser;
}

const db = {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};
export default db;
