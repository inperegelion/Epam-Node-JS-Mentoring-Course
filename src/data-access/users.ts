import { randomUUID } from 'crypto';
import { User, UserCore, UsersSearchQuery } from '../types';
import { findInstance } from '../utils/findInstance';
import { MOCKED_USERS } from './mocks';

const users = MOCKED_USERS;

export function getUser(userId: User['id']): User {
    return users.find((user) => user.id === userId && !user.isDeleted);
}

export function getUsers(params: UsersSearchQuery): User[] {
    const limit = Number(params.limit);
    const loginSubstring = params.loginSubstring;

    let searchResult: User[] = [...users];

    if (limit) searchResult = searchResult.slice(0, limit);

    if (loginSubstring)
        searchResult = users.filter((user) => {
            return user.login.includes(loginSubstring);
        });

    searchResult = searchResult.sort((a, b) => {
        return a.login > b.login ? 1 : -1;
    });

    searchResult = searchResult.filter((user) => !user.isDeleted);
    return searchResult;
}

export function createUser(data: UserCore): User {
    const newUser = {
        ...data,
        id: randomUUID(),
        isDeleted: false,
    };
    users.push(newUser);
    return newUser;
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
