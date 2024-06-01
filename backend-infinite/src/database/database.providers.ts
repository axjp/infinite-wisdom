/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '159817',
        database: 'infinitewisdom',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];
