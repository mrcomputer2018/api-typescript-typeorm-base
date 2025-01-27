import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'test', //coloque as configuracoes do seu BD
    password: 'test', //coloque as configuracoes do seu BD
    database: 'test', //coloque o do seu BD
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
});
