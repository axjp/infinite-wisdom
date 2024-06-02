import { DataSource } from 'typeorm';
import { Book } from '../database/entities/book.entity';

export const bookProviders = [
  {
    provide: 'BOOK_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Book),
    inject: ['DATA_SOURCE'],
  },
];
