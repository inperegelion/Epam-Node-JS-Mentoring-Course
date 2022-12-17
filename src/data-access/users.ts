import { Op } from 'sequelize';
import { User } from '../models/user';
import {
    IUserAttributes,
    IUserCreationAttributes,
    IUsersSearchQuery,
    UpdateUserResponse,
} from '../types';

export class UsersDB {
    public async get(id: IUserAttributes['id']) {
        const user = User.findByPk(id);
        return user;
    }

    public async getAll(
        params: IUsersSearchQuery
    ): Promise<UpdateUserResponse> {
        const limit = Number(params.limit);
        const loginSubstring = params.loginSubstring;

        const searchRequest: Record<string, any> = {};
        if (loginSubstring)
            searchRequest.where = {
                login: { [Op.like]: `%${loginSubstring}%` },
            };
        if (limit) searchRequest.limit = limit;

        const users = await User.findAndCountAll(searchRequest);

        return users;
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
}

export default new UsersDB();
