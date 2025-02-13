import 'reflect-metadata';
import { DataSource } from 'typeorm';
import 'dotenv/config'

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME, //coloque as configuracoes do seu BD
    password: process.env.DB_PASSWORD, //coloque as configuracoes do seu BD
    database: process.env.DB_DATABASE, //coloque o do seu BD
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
});
