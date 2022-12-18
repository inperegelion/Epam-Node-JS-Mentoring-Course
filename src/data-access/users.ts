import { FindAndCountOptions, Op } from 'sequelize';

import { addRecord } from '../utils/addRecord';
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
        const defaultParams = { sort: true, hideDeleted: true, limit: 10 };

        const searchRequest = this.composeSearchRequest({
            ...defaultParams,
            ...params,
        });

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

    public async softDelete(id: IUserAttributes['id']) {
        const affectedRows = await User.update(
            { is_deleted: true },
            { where: { id } }
        );
        if (affectedRows) return 1;
        return 0;
    }

    public async delete(id: IUserAttributes['id']) {
        const number = await User.destroy({ where: { id } });
        return number;
    }

    private composeSearchRequest(
        params: IUsersSearchQuery
    ): FindAndCountOptions<IUserAttributes> {
        const { limit, loginSubstring, sort, hideDeleted } = params;

        let searchRequest: FindAndCountOptions<IUserAttributes> = {};

        if (sort) searchRequest['order'] = [['login', 'ASC']];
        if (limit) searchRequest['limit'] = limit;

        if (hideDeleted)
            searchRequest = addRecord(
                searchRequest,
                ['where', 'is_deleted'],
                false
            );
        if (loginSubstring)
            searchRequest = addRecord(
                searchRequest,
                ['where', 'login', Op.like],
                `%${loginSubstring}%`
            );

        return searchRequest;
    }
}

export default new UsersDB();
