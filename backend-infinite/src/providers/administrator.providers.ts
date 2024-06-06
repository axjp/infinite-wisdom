import { DataSource } from 'typeorm';
import { AdministratorEntity } from 'src/entities/administrator.entity';

export const bookProviders = [
  {
    provide: 'ADMINISTRATOR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AdministratorEntity),
    inject: ['DATA_SOURCE'],
  },
];
