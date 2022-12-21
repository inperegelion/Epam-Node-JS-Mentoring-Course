import { randomUUID } from 'crypto';
import { User, UserCore, UsersSearchQuery } from '../types';
import { findInstance } from '../utils/findInstance';
import { sortByField } from '../utils/sortByField';
import { MOCKED_USERS } from './mocks';

const users = MOCKED_USERS;

export class UsersDB {
    users: User[];

    constructor() {
        this.users = users;
    }

    public get(userId: User['id']): User | undefined {
        return this.users.find((user) => user.id === userId && !user.isDeleted);
    }

    public getAll(params: UsersSearchQuery): User[] {
        const limit = Number(params.limit);
        const loginSubstring = params.loginSubstring;

        let searchResult: User[] = [...users];

        if (limit) searchResult = searchResult.slice(0, limit);

        if (loginSubstring)
            searchResult = users.filter((user) => {
                return user.login.includes(loginSubstring);
            });

        searchResult = searchResult.sort(sortByField('login'));

        searchResult = searchResult.filter((user) => !user.isDeleted);
        return searchResult;
    }

    public create(data: UserCore): User {
        const newUser = {
            ...data,
            id: randomUUID(),
            isDeleted: false,
        };
        this.users.push(newUser);
        return newUser;
    }

    public update(
        userId: User['id'],
        data: Partial<UserCore> | UserCore
    ): User | undefined {
        const [userIndex, user] = findInstance<User, string>(
            users,
            'id',
            userId
        );
        if (!user && userIndex === -1) return undefined;
        const updatedUser = { ...user, ...data } as User;
        users[userIndex] = updatedUser;
        return updatedUser;
    }

    public delete(userId: User['id']): User | undefined {
        const [userIndex, user] = findInstance<User, string>(
            users,
            'id',
            userId
        );
        if (!user && userIndex === -1) return undefined;
        const deletedUser = { ...user, isDeleted: true } as User;
        users[userIndex] = deletedUser;
        return deletedUser;
    }
}

export default new UsersDB();
