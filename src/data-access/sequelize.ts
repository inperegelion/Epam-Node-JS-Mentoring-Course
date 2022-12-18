import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { safeAsync } from '../utils/safeAsync';

dotenv.config();
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 'false';

const { PG_HOST, PG_PORT, PG_USER, PG_PASSWORD, PG_DATABASE } = process.env;

export const sequelize = new Sequelize(PG_DATABASE, PG_USER, PG_PASSWORD, {
    host: PG_HOST,
    port: Number(PG_PORT),
    dialect: 'postgres',
});

sequelize
    .authenticate()
    .catch((e) => console.error('Unable to connect to the database!\n', e));
