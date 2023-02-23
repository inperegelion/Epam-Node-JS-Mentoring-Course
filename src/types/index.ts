import Sequelize from 'sequelize';

export interface IUserModel
    extends Sequelize.Model<IUserAttributes, IUserCreationAttributes> {}

export interface IUserAttributes {
    id: string;
    is_deleted: boolean;
    login: string;
    password: string;
    age: number;
}

export interface IUserCreationAttributes {
    login: string;
    password: string;
    age: number;
}

export interface IError {
    message: string;
}

export interface IUsersSearchQuery {
    limit?: number;
    loginSubstring?: string;
    sort?: boolean;
    hideDeleted?: boolean;
}
export interface UpdateUserResponse {
    rows: IUserModel[];
    count: number;
}
