import { DataTypes } from 'sequelize';

import { sequelize } from '../data-access/sequelize';
import { IUserModel } from '../types';

export const User = sequelize.define<IUserModel>('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    login: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    age: { type: DataTypes.INTEGER, allowNull: false },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
});

sequelize.sync({ force: true });
