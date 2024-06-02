import { DataSource } from 'typeorm';
import { Gender } from '../database/entities/gender.entity';

export const genderProviders = [
  {
    provide: 'GENDER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Gender),
    inject: ['DATA_SOURCE'],
  },
];
