import 'reflect-metadata';
import { AppDataSource } from './database/data-source';

AppDataSource.initialize()
    .then(async () => {
        console.log('Banco de dados conectado com sucesso.');
    })
    .catch(error => console.log(error));
