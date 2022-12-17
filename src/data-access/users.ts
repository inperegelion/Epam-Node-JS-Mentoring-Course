import { User } from '../models/user';
import {
    IUserAttributes,
    IUserCreationAttributes,
    IUsersSearchQuery,
} from '../types';

export class UsersDB {
    public async get(id: IUserAttributes['id']) {
        const user = User.findOne({ where: { id } });
        return user;
    }

    public async create(userAttributes: IUserCreationAttributes) {
        const freshUser = await User.create(userAttributes);
        return freshUser;
    }

    public async update(
        id: IUserAttributes['id'],
        userAttributes: Partial<IUserCreationAttributes>
    ) {
        const affectedRows = await User.update(userAttributes, {
            where: { id },
        });
        return affectedRows;
    }

    public async delete(id: IUserAttributes['id']) {
        const number = await User.destroy({
            where: { id },
        });
        return number;
    }

    // public getAll(params: IUsersSearchQuery): IUserAttributes[] {
    //     const limit = Number(params.limit);
    //     const loginSubstring = params.loginSubstring;

    //     let searchResult: IUserAttributes[] = [...users];

    //     if (limit) searchResult = searchResult.slice(0, limit);

    //     if (loginSubstring)
    //         searchResult = users.filter((user) => {
    //             return user.login.includes(loginSubstring);
    //         });

    //     searchResult = searchResult.sort(sortByField('login'));

    //     searchResult = searchResult.filter((user) => !user.is_deleted);
    //     return searchResult;
    // }
}

export default new UsersDB();
