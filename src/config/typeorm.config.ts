import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'chithien123',
  database: 'testgraphql',
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
};
