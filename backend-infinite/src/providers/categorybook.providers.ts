import { DataSource } from 'typeorm';
import { CategoryBook } from '../database/entities/categorybook.entity';

export const categorybookProviders = [
  {
    provide: 'CATEGORYBOOK_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CategoryBook),
    inject: ['DATA_SOURCE'],
  },
];
